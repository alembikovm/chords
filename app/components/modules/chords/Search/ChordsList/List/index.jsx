import React from 'react';
import ListWrapper from './ListWrapper';
import ListItem from './ListItem';

class List extends React.Component {
    render() {
        return (
            <ListWrapper>
                <ul>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </ul>
            </ListWrapper>
        );
    }
}

export default List;