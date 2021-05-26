import React from 'react';
import ListWrapper from './ListWrapper';
import ListItem from './ListItem';

class List extends React.Component {
    render() {
        return (
            <ListWrapper>
                {this.props.items.map((item) => (
                    <ListItem
                        key={item._id}
                        onItemCheckClick={this.props.onItemCheckClick}
                        {...item}
                    />
                ))}
            </ListWrapper>
        );
    }
}

export default List;