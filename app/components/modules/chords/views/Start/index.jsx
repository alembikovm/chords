import React from 'react';
import { Grid, GridItem, PlusIcon } from "fronton-react";
import { useHistory } from 'react-router-dom';
import Container from './Container';
import ContentWrapper from './ContentWrapper';
import { SearchString, Dropdown, Button } from '../../../../common';
import useSearchString from '../../../../../hooks/useSearchString';
import HeaderContainer from "../Main/HeaderContainer";
import StartWrapper from './StartWrapper';
import Switcher from '../../../../common/Switcher';

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
        <StartWrapper>
            <HeaderContainer>
                <div>Связки</div>
                <Button
                    iconLeft={<PlusIcon />}
                    onClick={onCreateChordHandler}
                >
                    Создать связку 
                </Button>
            </HeaderContainer>
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
        </StartWrapper>
    );
}

export default Chords;
