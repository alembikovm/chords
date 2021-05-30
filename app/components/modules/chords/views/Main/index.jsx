import React from 'react'
import {Route} from 'react-router-dom';
import Container from './Container';
import {ChordsList} from './components';
import {Create, View} from './views';
import chords from '../../mocks/chords';
import ViewContainer from './ViewContainer';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChord: chords[0],
            chords,
        };
    }

    render() {
        return (
            <Container>
                <ChordsList chords={this.state.chords} />
                <ViewContainer>
                    <Route exact path={`/chords/main`}>
                        <View chord={this.state.selectedChord} />
                    </Route>
                    <Route path={`/chords/main/create`}>
                        <Create />
                    </Route>
                </ViewContainer>
            </Container>
        );
    }
}

export default Main;
