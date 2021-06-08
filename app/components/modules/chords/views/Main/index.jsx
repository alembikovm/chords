import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Grid, GridItem, useSnackbar, Snack, Snackbar} from 'fronton-react';
import {Route, useLocation, useHistory} from 'react-router-dom';
import Container from './Container';
import {ChordsList} from './components';
import {Create, View} from './views';
import ColorBlock from "./ColorBlock";
import HeaderContainer from "./HeaderContainer";
import FiltersContainer from "./FiltersContainer";
import ChordsHeader from "../../components/ChordsHeader";
import Filters from "./components/Filters";

function Main() {
    const {state: snackbarState, addSnack} = useSnackbar();
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

    const onDeleteChordHandler = async (chordId) => {
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

    const onDeleteByIds = async (selectedIds) => {
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

    return (
        <Container>
            <Snackbar>
                {snackbarState.map(({ id, title, type, time }) => (
                    <Snack
                        key={id}
                        id={id}
                        header={title}
                        variant={type}
                        autoHideTimer={time ? 3000 : undefined}
                    />
                ))}
            </Snackbar>
            <Grid areas={[
                'header header header',
                'filters filters filters',
                'list view view'
            ]}>
                <GridItem area='header'>
                    <HeaderContainer>
                        <div>Связки</div>
                        <ChordsHeader onFilterClick={onFilterClickHandler} />
                    </HeaderContainer>
                </GridItem>
                <GridItem area='filters'>
                    {showFilters && (
                        <FiltersContainer>
                            <Filters />
                        </FiltersContainer>
                    )}
                </GridItem>
                <GridItem area='list'>
                    <ChordsList
                        chords={chords}
                        onItemClick={onListItemClickHandler}
                        loading={loading}
                        onDeleteByIds={onDeleteByIds}
                    />
                </GridItem>
                <GridItem area='view'>
                    <ColorBlock bg='var(--background-primary)'>
                        {!loading && (
                            <>
                                <Route exact path={`/chords/main`}>
                                    <View chord={selectedChord} onDelete={onDeleteChordHandler} />
                                </Route>
                                <Route path={`/chords/main/create`}>
                                    <Create />
                                </Route>
                            </>
                        )}
                    </ColorBlock>
                </GridItem>
            </Grid>
        </Container>
    );
}

export default Main;
