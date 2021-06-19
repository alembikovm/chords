import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {GridItem, PlusIcon} from 'fronton-react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import MainLayout from './MainLayout';
import Header from '../../components/Header';
import Filters from './Filters';
import ListContainer from './ListContainer';
import MainContainer from './Main';
import Buttons from './Buttons';
import FilterIcon from '../../../../common/icons/FilterIcon';
import {Button} from '../../../../common';
import List from './components/List';
import Loader from './components/Loader';

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
    const {path} = useRouteMatch();
    const [loading, setLoading] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [chords, setChords] = useState([]);
    const [selectedChord, setSelectedChord] = useState(chords[0]);

    const fetchChords = async (URL) => {
        setLoading(true);

        try {
            const response = await axios.get(URL);
            const chords = response.data;

            setChords(chords);
            setSelectedChord(chords[0]);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const URL = 'https://run.mocky.io/v3/1ebf42f8-041c-4dbf-848c-3c55570f5e5e';

        fetchChords(URL);
    }, []);

    const onShowFiltersHandler = () => setShowFilters(!showFilters);

    const onCreateChordHandler = () => history.push('/chords/main/add');

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
            <GridItem area='header'>
                <Header>
                    <h1>Связки</h1>
                    <Buttons>
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
                    {loading ? <Loader /> : <List items={chords} />}
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
    );
}

export default Main;
