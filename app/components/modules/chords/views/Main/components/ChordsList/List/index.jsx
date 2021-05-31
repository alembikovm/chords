import React from 'react';
import ListWrapper from './ListWrapper';
import ListItem from './ListItem';

function List(props) {
    return (
        <ListWrapper>
            {props.items.map((item) => (
                <ListItem
                    key={item.chordId}
                    onItemCheckClick={props.onItemCheckClick}
                    {...item}
                    onClick={() => props.onItemClick(item.chordId)}
                />
            ))}
        </ListWrapper>
    );
}

export default List;
