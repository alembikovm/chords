import React from 'react';
import Container from './Container';
import ContentWrapper from './ContentWrapper';
import {SearchString, Dropdown} from '../../../../common';
import useSearchString from '../../../../../hooks/useSearchString';

function Chords() {
    const {
        chordsItems,
        searchByItems,
        chordType,
        searchString,
        searchBy,
        disableSearch,
        onChangeChordTypeHandler,
        onChangeSearchString,
        onChangeSearchBy,
    } = useSearchString();

    const onSearchHandler = () => {
        console.log('Searching...');
    }

    return (
        <Container>
            <ContentWrapper>
                <div>
                    Для поиска связки выбери ее тип и критерий поиска
                </div>
                <Dropdown
                    placeholder="Выберите тип связки"
                    value={chordType}
                    items={chordsItems}
                    onChange={onChangeChordTypeHandler}
                />
                <SearchString
                    value={searchString}
                    placeholder="Введи SKU"
                    disabled={disableSearch}
                    dropdownValue={searchBy}
                    dropdownItems={searchByItems}
                    to='/chords/main'
                    onDropdownChange={onChangeSearchBy}
                    onChange={onChangeSearchString}
                    onSearch={onSearchHandler}
                />
            </ContentWrapper>
        </Container>
    );
}

export default Chords;
