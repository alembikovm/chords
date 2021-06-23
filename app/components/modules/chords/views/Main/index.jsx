import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {
    GridItem,
    useSnackbar,
    Snackbar,
    Snack,
    SnackButton,
    CloseIcon,
} from 'fronton-react';
import { unwrapResult } from '@reduxjs/toolkit';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from './MainLayout';
import Header from '../../components/Header';
import FiltersContainer from './FiltersContainer';
import ListContainer from './ListContainer';
import MainContainer from './Main';
import List from './components/List';
import Loader from './components/Loader';
import { ChordAdd, ChordEdit, ChordView } from './subviews';
import {
    setChords as setChordsAction,
    setSelectedChord as setSelectedChordAction
} from '../../../../../slices/chords/chordsSlice';
import InfoIcon from '../../../../common/icons/InfoIcon';
import ChordsHeader from './components/ChordsHeader';
import { fetchChords } from '../../../../../slices/chords/chordsSlice';
import Filters from './components//Filters';

function Main() {
    const { state: snackbarState, addSnack, removeSnack } = useSnackbar();
    const history = useHistory();
    const dispatch = useDispatch();
    const {path} = useRouteMatch();
    const [loading, setLoading] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const chordsStore = useSelector((state) => state.chords.chords);
    const [chords, setChords] = useState(chordsStore);
    const [selectedChord, setSelectedChord] = useState(chords[0]);

    const [templateLoading, setTemplateLoading] = useState(true);
    const [templateList, setTemplateList] = useState([]);

    useEffect(() => {
        setChords(chordsStore);
    }, [chordsStore]);

    useEffect(() => {
        const fetchTemplateList = async () => {
            setTemplateLoading(true);

            try {
                const response = await axios.get('https://run.mocky.io/v3/40d978ed-1ce8-42b7-b0a8-f09be55cda41');
                const templateList = response.data;

                setTemplateList(templateList);
            } catch (error) {
                console.log(error);
            } finally {
                setTemplateLoading(false);
            }
        }

        fetchTemplateList()
    }, []);

    const onShowFiltersHandler = () => setShowFilters(!showFilters);

    const fetchMockedChords = async () => {
        dispatch(fetchChords())
            .then(unwrapResult)
            .then((chords) => history.push(`${path}/${chords[0].chordId}`));
    };

    const onSearchHandler = () => fetchMockedChords();

    const onFilterHandler = () => fetchMockedChords();

    const onDeleteByIds = (ids) => {
        addSnack({
            id: 'onConfirmDeleteChordsSnack',
            title: `Вы действительно хотите удалить ${ids.length > 1 ? 'связки' : 'связку'}?`,
            type: 'alert',
            time: false,
            icon: <InfoIcon color='brand-dark' />,
            wideButton: true,
            closeButton: true,
            confirmButton: true,
            buttonText: 'Подтвердить',
            onClick: () => {
                removeSnack('onConfirmDeleteChordsSnack');
                onConfirmDeleteByIds(ids);
            },
        });
    }

    const onConfirmDeleteByIds = async (selectedIds) => {
        let snack = {
            id: 'onDeleteChordSnack',
            title: selectedIds.length > 1 ? 'Связки успешно удалены' : 'Связка успешно удалена',
            type: 'success',
            time: true,
        };

        try {
            const response = await axios.delete('https://run.mocky.io/v3/1ebf42f8-041c-4dbf-848c-3c55570f5e5e');
            const updatedChords = chords.filter((chord) => !selectedIds.includes(chord.chordId));

            setChords(updatedChords);
            setSelectedChord(updatedChords[0]);
            dispatch(setChordsAction(updatedChords));
            dispatch(setSelectedChordAction(updatedChords[0]));
            history.push(`${path}/main/${updatedChords[0].chordId}`);
        } catch (error) {
            snack = {
                ...snack,
                title: 'Ошибка удаления связок',
                type: 'danger',
            }
        } finally {
            addSnack(snack);
        }
    }

    const getAreas = () => ([
        'header header',
        ...showFilters ? ['filters filters'] : [],
        'list main',
    ]);
    const getRows = () => ([
        '70px',
        ...showFilters ? ['70px'] : [],
        '1fr',
    ]);

    return (
        <MainLayout
            areas={getAreas()}
            rows={getRows()}
            columns={['minmax(488px, 1fr)', '2fr']}
            gap='space-10'
        >
            <Snackbar>
                {snackbarState.map(({
                    id,
                    title,
                    type,
                    time,
                    onClick,
                    wideButton,
                    closeButton,
                    confirmButton,
                    buttonText
                }) => (
                    <Snack
                        key={id}
                        id={id}
                        header={title}
                        variant={type}
                        autoHideTimer={time ? 3000 : undefined}
                        wideButton={wideButton}
                        closeButton={closeButton}
                    >
                        {closeButton && <SnackButton onClick={() => removeSnack(id)}>Закрыть</SnackButton>}
                        {confirmButton && <SnackButton onClick={onClick}>{buttonText}</SnackButton>}
                    </Snack>
                ))}
            </Snackbar>
            <GridItem area='header'>
                <Header>
                    <h1>Связки</h1>
                    <ChordsHeader
                        onFilterClick={onShowFiltersHandler}
                        templateLoading={templateLoading}
                        templateList={templateList}
                        onClickSearchHandler={onSearchHandler}
                    />
                </Header>
            </GridItem>
            {showFilters && (
                <GridItem area='filters'>
                    <FiltersContainer>
                        <Filters onFilter={onFilterHandler} />
                    </FiltersContainer>
                </GridItem>
            )}
            <GridItem area='list'>
                <ListContainer>
                    {loading ? <Loader /> : <List items={chords} onDelete={onDeleteByIds} />}
                </ListContainer>
            </GridItem>
            <GridItem area='main'>
                <MainContainer>
                    <Switch>
                        <Route path={`${path}/add`}>
                            <ChordAdd />
                        </Route>
                        <Route path={`${path}/edit/:chordId`}>
                            <ChordEdit onDelete={onDeleteByIds} />
                        </Route>
                        <Route path={`${path}/:chordId`}>
                            <ChordView onDelete={onDeleteByIds} />
                        </Route>
                    </Switch>
                </MainContainer>
            </GridItem>
        </MainLayout>
    );
}

export default Main;
