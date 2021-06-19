import React, {useState} from 'react';
import {Pagination, PaginationItem} from 'fronton-react';
import Header from './Header';
import ListItem from './ListItem';
import ListFooter from './ListFooter';
import ListHeader from './ListHeader';
import ListItems from './ListItems';
import ListWrapper from './ListWrapper';
import ScrollContainer from './ScrollContainer';

function List({items}) {
    const [chords, setChords] = useState(items.map((item) => ({...item, checked: false})));
    const [checkedAll, setCheckedAll] = useState(false);
    const [checkedIds, setCheckedIds] = useState([]);
    const [itemsCount, setCount] = useState(items.length);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const onCheckedAllHandler = (checked) => {
        setCheckedAll(checked);

        if (checked) {
            setCheckedIds(items.map((chord) => chord.chordId));
            setChords(chords.map((chord) => ({...chord, checked: true})));
        } else {
            setCheckedIds([]);
            setChords(chords.map((chord) => ({...chord, checked: false})));
        }
    };

    const onCheckChordHandler = (checked, chordId) => {
        const chordIndex = chords.findIndex((chord) => chordId === chord.chordId);
        const updatedChords = [...chords];
        updatedChords[chordIndex].checked = checked;
        setChords(updatedChords);

        if (checked) {
            setCheckedIds([...checkedIds, chordId]);
        } else {
            setCheckedIds(checkedIds.filter((id) => id !== chordId));
        }
    };

    const onPageClickHandler = (value) => {
        setCurrentPage(value);
        onCheckedAllHandler(false);
    };

    return (
        <ListWrapper>
            <ListHeader>
                <Header
                    checkedAll={checkedAll}
                    checkedChordsQuantity={checkedIds.length}
                    foundChordsQuantity={chords.length}
                    onCheckedAll={onCheckedAllHandler}
                />
            </ListHeader>
            <ScrollContainer>
                <ListItems>
                    {chords.slice(
                        (currentPage - 1) * itemsPerPage,
                        currentPage * itemsPerPage
                    ).map((chord) => (
                        <ListItem
                            key={chord.chordId}
                            {...chord}
                            onCheckChord={onCheckChordHandler}
                        />
                    ))}
                </ListItems>
            </ScrollContainer>
            <ListFooter>
                <Pagination
                    itemsCount={itemsCount}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    prevText={"<"}
                    nextText={">"}
                    item={(value) =>
                        <PaginationItem onClick={() => onPageClickHandler(value)}>
                            {value}
                        </PaginationItem>
                    }
                    className='pagination'
                />
            </ListFooter>
        </ListWrapper>
    );
}

export default List;
