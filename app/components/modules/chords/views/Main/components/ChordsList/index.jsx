import React, { useState, useEffect } from 'react';
import {Pagination, PaginationItem, Checkbox} from "fronton-react";
import ChordsListWrapper from './ChordsListWrapper';
import ChordsListHeader from './ChordsListHeader';
import ChordsListMain from "./ChordsListMain";
import CheckboxContainer from "./CheckboxContainer";
import ChordsSelectedText from "./ChordsSelectedText";
import PaginationContainer from "./PaginationContainer";
import List from './List';
import {Button} from "../../../../../../common";
import DownloadIcon from "../../../../../../common/icons/DownloadIcon";
import TrashIcon from "../../../../../../common/icons/TrashIcon";

function ChordsList(props) {
    const [selectedIds, setSelectedIds] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [items, setItems] = useState([]);
    const [itemsCount, setCount] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const onCheckAllItemsClickHandler = (checked) => {
        setSelectAll(checked);
        setSelectedIds(checked ? items.map(({chordId}) => chordId) : [],);
        setItems(items.map((item) => ({...item, checked})));
    };

    const onItemCheckClickHandler = ({chordId, checked}) => {
        const itemIndex = items.findIndex((chord) => chord.chordId === chordId);

        const updatedItems = [...items];
        updatedItems[itemIndex].checked = checked;

        setItems(updatedItems);

        setSelectedIds(
            checked
                ? [...selectedIds, chordId]
                : [...selectedIds].filter((id) => id !== chordId)
        );
    };

    const onPaginationItemClick = (value) => {
        setCurrentPage(value);
    };

    useEffect(() => {
        setItems(props.chords.map((chord) => ({...chord, checked: false})));
        setCount(props.chords.length)
    }, [props.chords]);

    return (
        <ChordsListWrapper>
            <ChordsListMain>
                <ChordsListHeader>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <CheckboxContainer>
                            <Checkbox
                                checked={selectAll}
                                onChange={onCheckAllItemsClickHandler}
                            />
                        </CheckboxContainer>
                        <ChordsSelectedText>
                            {selectedIds.length} связок выбрано
                        </ChordsSelectedText>
                        <Button kind="icon" size='s' style={{marginLeft: '12px'}} iconOnly disabled>
                            <DownloadIcon />
                        </Button>
                        <Button
                            kind="icon"
                            size='s'
                            style={{marginLeft: '12px'}}
                            disabled={!selectedIds.length}
                            onClick={async () => {
                                await props.onDeleteByIds(selectedIds);
                                setSelectedIds([]);
                            }}
                            iconOnly
                        >
                            <TrashIcon />
                        </Button>
                    </div>
                    <div>
                        <ChordsSelectedText color='var(--success-primary)'>
                            {items.length} связок найдено
                        </ChordsSelectedText>
                    </div>
                </ChordsListHeader>
                <div style={{flex: '1 1 auto', overflow: 'hidden', position: 'relative'}}>
                    <List
                        items={items.slice(
                            (currentPage - 1) * itemsPerPage,
                            currentPage * itemsPerPage
                        )}
                        onItemCheckClick={onItemCheckClickHandler}
                        onItemClick={props.onItemClick}
                        loading={props.loading}
                        selectedChordId={props.selectedChordId}
                    />
                </div>
            </ChordsListMain>
            <PaginationContainer>
                <Pagination
                    itemsCount={itemsCount}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    prevText={"<"}
                    nextText={">"}
                    item={(value) =>
                        <PaginationItem onClick={() => onPaginationItemClick(value)}>
                            {value}
                        </PaginationItem>
                    }
                />
            </PaginationContainer>
        </ChordsListWrapper>
    );
}

export default ChordsList;
