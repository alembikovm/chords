import React from 'react'
import Container from './Container';
import ChordsList from './ChordsList';
import ChordView from './ChordView';
import chords from './chords';

class Search extends React.Component {
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
                <ChordView chord={this.state.selectedChord} />
            </Container>
        );
    }
}

export default Search;
