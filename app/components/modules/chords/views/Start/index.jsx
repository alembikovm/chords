import React from 'react';
import {GridItem, PlusIcon } from "fronton-react";
import {useHistory} from 'react-router-dom';
import StartLayout from './StartLayout';
import Header from './Header';
import Main from './Main';
import SearchContainer from './SearchContainer';
import SearchTitle from './SearchTitle';
import {SearchString, Dropdown, Button} from '../../../../common';
import useSearchString from '../../../../../hooks/useSearchString';

function Chords() {
    const history = useHistory();

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

    const onCreateChordHandler = () => history.push('/chords/main/create');

    return (
        <StartLayout areas={['header', 'main']} rows='70px 1fr' gap='space-10'>
            <GridItem area='header'>
                <Header>
                    <h1>Связки</h1>
                    <Button
                        iconLeft={<PlusIcon />}
                        onClick={onCreateChordHandler}
                    >
                        Создать связку 
                    </Button>
                </Header>
            </GridItem>
            <GridItem area='main'>
                <Main>
                    <SearchContainer>
                        <SearchTitle>Для поиска связки выбери ее тип и критерий поиска</SearchTitle>
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
                    </SearchContainer>
                </Main>
            </GridItem>
        </StartLayout>
    );
}

export default Chords;
