import React from 'react';
import ChordsListWrapper from './ChordsListWrapper';
import ChordsListHeader from './ChordsListHeader';
import ChordsListMain from "./ChordsListMain";
import CheckboxContainer from "./CheckboxContainer";
import ChordsSelectedText from "./ChordsSelectedText";
import PaginationContainer from "./PaginationContainer";
import List from './List';
import {Pagination, PaginationItem} from "fronton-react";
import {Checkbox} from 'fronton-react';

class ChordsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIds: [],
            selectAll: false,
            items: props.chords.map((chord) => ({...chord, checked: false})),
        };
    }

    onCheckAllItemsClickHandler = (checked) => {
        this.setState((state) => {
            return {
                selectAll: checked,
                selectedIds: checked ? state.items.map(({_id}) => _id) : [],
                items: state.items.map((item) => ({...item, checked}))
            };
        });
    }

    onItemCheckClickHandler = ({_id: itemId, checked}) => {
        const itemIndex = this.state.items.findIndex(({_id}) => _id === itemId);
        this.setState((state) => {
            const updatedItems = [...state.items];
            updatedItems[itemIndex].checked = checked;

            return {items: updatedItems};
        });

        if (checked) {
            this.setState((state) => {
                return {selectedIds: [...state.selectedIds, itemId]};
            });
        } else {
            this.setState((state) => {
                return {selectedIds: [...state.selectedIds].filter((id) => id !== itemId)};
            });
        }
    }

    render() {
        return (
            <ChordsListWrapper>
                <ChordsListMain>
                    <ChordsListHeader>
                        <CheckboxContainer>
                            <Checkbox
                                checked={this.state.selectAll}
                                onChange={this.onCheckAllItemsClickHandler}
                            />
                        </CheckboxContainer>
                        <ChordsSelectedText>
                            {this.state.selectedIds.length} связок выбрано
                        </ChordsSelectedText>
                    </ChordsListHeader>
                    <List
                        items={this.state.items}
                        onItemCheckClick={this.onItemCheckClickHandler}
                    />
                </ChordsListMain>
                <PaginationContainer>
                    <Pagination
                        itemsCount={100}
                        itemsPerPage={10}
                        currentPage={1}
                        hidePrev={true}
                        hideNext={false}
                        prevText={"<"}
                        nextText={">"}
                        item={(value) =>
                            <PaginationItem onClick={() => console.log('pagination')}>
                                {value}
                            </PaginationItem>
                        }
                    />
                </PaginationContainer>
            </ChordsListWrapper>
        );
    }
}

export default ChordsList;