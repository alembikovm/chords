import React from 'react';
import ListWrapper from './ListWrapper';
import ListItem from './ListItem';

class List extends React.Component {
    render() {
        return (
            <ListWrapper>
                {this.props.items.map((item) => (
                    <ListItem
                        key={item.chordId}
                        onItemCheckClick={this.props.onItemCheckClick}
                        {...item}
                        onClick={this.props.onItemClick(item.chordId)}
                    />
                ))}
            </ListWrapper>
        );
    }
}

export default List;
