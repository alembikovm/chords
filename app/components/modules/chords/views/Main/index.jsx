import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {
    GridItem,
    PlusIcon,
    useSnackbar,
    Snackbar,
    Snack,
    SnackButton,
} from 'fronton-react';
import { unwrapResult } from '@reduxjs/toolkit';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FilterIcon from '../../../../common/icons/FilterIcon';
import MainLayout from './MainLayout';
import Header from '../../components/Header';
import Filters from './Filters';
import ListContainer from './ListContainer';
import MainContainer from './Main';
import Buttons from './Buttons';
import List from './components/List';
import Loader from './components/Loader';
import { Button } from '../../../../common';
import { ChordAdd, ChordEdit, ChordView } from './subviews';
import {
    setChords as setChordsAction,
    setSelectedChord as setSelectedChordAction
} from '../../../../../slices/chords/chordsSlice';
import InfoIcon from '../../../../common/icons/InfoIcon';
import ChordsHeader from './components/ChordsHeader';
import { fetchChords } from '../../../../../slices/chords/chordsSlice';

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
    });

    const onShowFiltersHandler = () => setShowFilters(!showFilters);

    const onSearchHandler = async () => {
        dispatch(fetchChords())
            .then(unwrapResult)
            .then((chords) => history.push(`${path}/${chords[0].chordId}`));
    };

    const onDeleteByIds = (ids) => {
        addSnack({
            id: 'onConfirmDeleteChordsSnack',
            title: 'Вы действительно хотите удалить связку?',
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
            title: 'Связки успешно удалены',
            type: 'success',
            time: true,
        };

        try {
            const response = await axios.delete('https://run.mocky.io/v3/1ebf42f8-041c-4dbf-848c-3c55570f5e5e');
            const updatedChords = chords.filter((chord) => !selectedIds.includes(chord.chordId));

            setChords(updatedChords);
            setSelectedChord(chords[0]);
            dispatch(setChordsAction(chords));
            dispatch(setSelectedChordAction(selectedChord));
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
            columns={['1fr', '2fr']}
            gap='space-10'
        >
            <Snackbar>
                {snackbarState.map(({ id, title, type, time, onClick, wideButton, closeButton, confirmButton, buttonText }) => (
                    <Snack
                        key={id}
                        id={id}
                        header={title}
                        variant={type}
                        autoHideTimer={time ? 3000 : undefined}
                        wideButton={wideButton}
                        closeButton={closeButton}
                    >
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
                    {/* <Buttons>
                        <Button
                            iconLeft={<FilterIcon />}
                            variant='pseudo'
                            onClick={onShowFiltersHandler}
                        >
                            Фильтр
                        </Button>
                        <Button
                            iconLeft={<PlusIcon />}
                            onClick={onCreateChordHandler}
                        >
                            Создать связку
                        </Button>
                    </Buttons> */}
                </Header>
            </GridItem>
            {showFilters && (
                <GridItem area='filters'>
                    <Filters>
                        filters
                    </Filters>
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
