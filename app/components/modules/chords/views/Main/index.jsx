import React, {useState} from 'react'
import {Route, useLocation, useHistory} from 'react-router-dom';
import Container from './Container';
import {ChordsList} from './components';
import {Create, View} from './views';
import chordsMock from '../../mocks/chords';
import ViewContainer from './ViewContainer';

function Main() {
    const [chords] = useState(chordsMock);
    const [selectedChord, setSelectedChord] = useState(chords[0]);
    const location = useLocation();
    const history = useHistory();

    const onListItemClickHandler = (chordId) => {
        if (location.pathname !== '/chords/main') {
            history.push('/chords/main');
        }

        const chord = chords.find((chord) => (chord.chordId === chordId));
        setSelectedChord(chord)
    }

    return (
        <Container>
            <ChordsList
                chords={chords}
                onItemClick={onListItemClickHandler}
            />
            <ViewContainer>
                <Route exact path={`/chords/main`}>
                    <View chord={selectedChord} />
                </Route>
                <Route path={`/chords/main/create`}>
                    <Create />
                </Route>
            </ViewContainer>
        </Container>
    );
}

export default Main;
