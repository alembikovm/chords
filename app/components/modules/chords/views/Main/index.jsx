import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Grid, GridItem, useSnackbar, Snack, Snackbar, SnackButton, PlusIcon} from 'fronton-react';
import {Switch, Route, useLocation, useHistory, useRouteMatch} from 'react-router-dom';
import Container from './Container';
import {ChordsList} from './components';
import {Create, View} from './views';
import ColorBlock from "./ColorBlock";
import HeaderContainer from "./HeaderContainer";
import FiltersContainer from "./FiltersContainer";
import ChordsHeader from "../../components/ChordsHeader";
// import Filters from "./components/Filters";
import InfoIcon from '../../../../common/icons/InfoIcon';

import MainLayout from './MainLayout';
import Header from '../../components/Header';
import Filters from './Filters';
import ListContainer from './ListContainer';
import MainContainer from './Main';
import Buttons from './Buttons';
import FilterIcon from '../../../../common/icons/FilterIcon';
import {Button} from '../../../../common';

function ChordEdit() {
    return (
        <div>Chord edit</div>
    );
}

function ChordAdd() {
    return (
        <div>Chord add</div>
    );
}

function ChordView() {
    return (
        <div>Chord view</div>
    );
}

function Main() {
    const {state: snackbarState, addSnack, removeSnack} = useSnackbar();
    const [loading, setLoading] = useState(true);
    const [chords, setChords] = useState([]);
    const [selectedChord, setSelectedChord] = useState(null);
    const location = useLocation();
    const history = useHistory();
    const [showFilters, setShowFilters] = useState(false);

    const onListItemClickHandler = (chordId) => {
        if (location.pathname !== '/chords/main') {
            history.push('/chords/main');
        }

        const chord = chords.find((chord) => (chord.chordId === chordId));
        setSelectedChord(chord)
    }

    const onDeleteChordHandler = (chordId) => {
        addSnack({
            id: 'onConfirmDeleteChordSnack',
            title: 'Вы действительно хотите удалить связку?',
            type: 'alert',
            time: false,
            icon: <InfoIcon color='brand-dark' />,
            wideButton: true,
            closeButton: true,
            confirmButton: true,
            buttonText: 'Подтвердить',
            onClick: () => {
                removeSnack('onConfirmDeleteChordSnack');
                onConfirmDeleteChord(chordId);
            },
        });
    };

    const onConfirmDeleteChord = async (chordId) => {
        let snack = {
            id: 'onDeleteChordSnack',
            title: 'Связка успешно удалена',
            type: 'success',
            time: true,
        };

        try {
            await axios.delete('https://run.mocky.io/v3/c3ccec58-2537-4200-bb0a-0fe1ab4f18e2');

            setChords(chords.filter((chord) => chord.chordId !== chordId));
            setSelectedChord(chords[0]);
        } catch (error) {
            snack = {
                ...snack,
                title: 'Ошибка удаления связки',
                type: 'danger',
            }
        } finally {
            addSnack(snack);
        }
    }

    useEffect(() => {
      const fetchChords = async () => {
          setLoading(true);

          try {
              const response = await axios.get('https://run.mocky.io/v3/1ebf42f8-041c-4dbf-848c-3c55570f5e5e');
              const chords = response.data;

              setChords(chords);
              setSelectedChord(chords[0]);
          } catch (error) {
              console.log(error);
          } finally {
              setLoading(false);
          }
      };

      fetchChords();
    }, []);

    const onFilterClickHandler = () => setShowFilters(!showFilters);

    const onDeleteByIds = (selectedIds) => {
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
                onConfirmDeleteByIds(selectedIds);
            },
        });
    };

    const onConfirmDeleteByIds = async (selectedIds) => {
        let snack = {
            id: 'onDeleteChordSnack',
            title: 'Связки успешно удалены',
            type: 'success',
            time: true,
        };

        try {
            const response = await axios.delete('https://run.mocky.io/v3/1ebf42f8-041c-4dbf-848c-3c55570f5e5e');
            //const chords = response.data;
            const updatedChords = chords.filter((chord) => !selectedIds.includes(chord.chordId));

            setChords(updatedChords);
            setSelectedChord(chords[0]);
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

    const onCreateChordHandler = () => history.push('/chords/main/add');

    const {path, url} = useRouteMatch();

    return (
        <MainLayout
            areas={getAreas()}
            rows={getRows()}
            columns={['1fr', '2fr']}
            gap='space-10'
        >
            <GridItem area='header'>
                <Header>
                    <h1>Связки</h1>
                    <Buttons>
                        <Button
                            iconLeft={<FilterIcon />}
                            variant='pseudo'
                            onClick={onFilterClickHandler}
                        >
                            Фильтр
                        </Button>
                        <Button
                            iconLeft={<PlusIcon />}
                            onClick={onCreateChordHandler}
                        >
                            Создать связку 
                        </Button>
                    </Buttons>
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
                    list
                </ListContainer>
            </GridItem>
            <GridItem area='main'>
                <MainContainer>
                    <Switch>
                        <Route path={`${path}/add`}>
                            <ChordAdd />
                        </Route>
                        <Route path={`${path}/edit/:chordId`}>
                            <ChordEdit />
                        </Route>
                        <Route path={`${path}/:chordId`}>
                            <ChordView />
                        </Route>
                    </Switch>
                </MainContainer>
            </GridItem>
        </MainLayout>
        // <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        //     <Snackbar>
        //         {snackbarState.map(({ id, title, type, time, onClick, wideButton, closeButton, confirmButton, buttonText }) => (
        //             <Snack
        //                 key={id}
        //                 id={id}
        //                 header={title}
        //                 variant={type}
        //                 autoHideTimer={time ? 3000 : undefined}
        //                 wideButton={wideButton}
        //                 closeButton={closeButton}
        //             >
        //                 {confirmButton && <SnackButton onClick={onClick}>{buttonText}</SnackButton>}
        //             </Snack>
        //         ))}
        //     </Snackbar>
        //     <HeaderContainer>
        //         <div>Связки</div>
        //         <ChordsHeader onFilterClick={onFilterClickHandler} />
        //     </HeaderContainer>
        //     {showFilters && (
        //         <FiltersContainer>
        //             <Filters />
        //         </FiltersContainer>
        //     )}
        //     <div style={{display: 'flex', flex: '1 1 auto'}}>
        //         <div style={{display: 'flex', flexDirection: 'column', flex: '0 0 33%'}}>
        //             <ChordsList
        //                 chords={chords}
        //                 onItemClick={onListItemClickHandler}
        //                 loading={loading}
        //                 onDeleteByIds={onDeleteByIds}
        //             />
        //         </div>
        //         <div style={{flex: '1 1 auto', backgroundColor: 'var(--background-primary)'}}>
        //             {!loading && (
        //                 <>
        //                     <Route exact path={`/chords/main`}>
        //                         <View chord={selectedChord} onDelete={onDeleteChordHandler} />
        //                     </Route>
        //                     <Route path={`/chords/main/create`}>
        //                         <Create />
        //                     </Route>
        //                 </>
        //             )}
        //         </div>
        //     </div>
        // </div>
    );
}

export default Main;
