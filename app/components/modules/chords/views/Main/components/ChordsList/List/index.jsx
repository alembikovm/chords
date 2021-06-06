import React, { useEffect } from 'react';
import {Loader} from 'fronton-react';
import ListWrapper from './ListWrapper';
import ListItem from './ListItem';
import LoaderContainer from '../../../../../components/LoaderContainer';

function List(props) {
    useEffect(() => {}, [props.loading]);

    return (
        <ListWrapper>
            {props.loading ? (
                <LoaderContainer>
                    <Loader size="xl" />
                </LoaderContainer>
            ) : props.items.map((item) => (
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
