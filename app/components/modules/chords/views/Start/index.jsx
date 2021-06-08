import React from 'react';
import Container from './Container';
import ContentWrapper from './ContentWrapper';
import {SearchString, Dropdown, Button} from '../../../../common';
import useSearchString from '../../../../../hooks/useSearchString';
import {Grid, GridItem, PlusIcon} from "fronton-react";
import HeaderContainer from "../Main/HeaderContainer";
import ChordsHeader from "../../components/ChordsHeader";
import FiltersContainer from "../Main/FiltersContainer";
import Filters from "../Main/components/Filters";
import {ChordsList} from "../Main/components";
import ColorBlock from "../Main/ColorBlock";
import {Link as ReactRouterLink, Route} from "react-router-dom";
import {Create, View} from "../Main/views";

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
        <Grid areas={['header', 'main']}>
            <GridItem area='header'>
                <HeaderContainer>
                    <div>Связки</div>
                    <Button
                        as={ReactRouterLink}
                        to="/chords/main/create"
                        iconLeft={<PlusIcon />}
                    >
                        Создать связку
                    </Button>
                </HeaderContainer>
            </GridItem>
            <GridItem area='main'>
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
            </GridItem>
        </Grid>
    );
}

export default Chords;
