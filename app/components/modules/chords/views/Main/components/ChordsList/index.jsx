import React from 'react';
import {Pagination, PaginationItem, Checkbox} from "fronton-react";
import ChordsListWrapper from './ChordsListWrapper';
import ChordsListHeader from './ChordsListHeader';
import ChordsListMain from "./ChordsListMain";
import CheckboxContainer from "./CheckboxContainer";
import ChordsSelectedText from "./ChordsSelectedText";
import PaginationContainer from "./PaginationContainer";
import List from './List';


class ChordsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIds: [],
            selectAll: false,
            items: props.chords.map((chord) => ({...chord, checked: false})),
            itemsCount: props.chords.length,
            itemsPerPage: 10,
            currentPage: 1,
        };
    }

    onCheckAllItemsClickHandler = (checked) => {
        this.setState((state) => {
            return {
                selectAll: checked,
                selectedIds: checked ? state.items.map(({chordId}) => chordId) : [],
                items: state.items.map((item) => ({...item, checked}))
            };
        });
    }

    onItemCheckClickHandler = ({chordId, checked}) => {
        const itemIndex = this.state.items.findIndex((chord) => chord.chordId === chordId);
        this.setState((state) => {
            const updatedItems = [...state.items];
            updatedItems[itemIndex].checked = checked;

            return {items: updatedItems};
        });

        if (checked) {
            this.setState((state) => {
                return {selectedIds: [...state.selectedIds, chordId]};
            });
        } else {
            this.setState((state) => {
                return {selectedIds: [...state.selectedIds].filter((id) => id !== chordId)};
            });
        }
    }

    onPaginationItemClick = (value) => {
        this.setState({currentPage: value});
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
                        items={this.state.items.slice(
                            (this.state.currentPage - 1) * this.state.itemsPerPage,
                            this.state.currentPage * this.state.itemsPerPage
                        )}
                        onItemCheckClick={this.onItemCheckClickHandler}
                    />
                </ChordsListMain>
                <PaginationContainer>
                    <Pagination
                        itemsCount={this.state.itemsCount}
                        itemsPerPage={this.state.itemsPerPage}
                        currentPage={this.state.currentPage}
                        prevText={"<"}
                        nextText={">"}
                        item={(value) =>
                            <PaginationItem onClick={() => this.onPaginationItemClick(value)}>
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
