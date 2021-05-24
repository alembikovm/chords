import React from 'react'
import Container from './Container';
import ChordsList from './ChordsList';

class Search extends React.Component {
    render() {
        return (
            <Container>
                <ChordsList />
                <div>block</div>
            </Container>
        );
    }
}

export default Search;
