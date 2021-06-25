import React, { Children } from 'react';
import {GridItem, PlusIcon } from "fronton-react";
import {useHistory, useRouteMatch} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {unwrapResult} from '@reduxjs/toolkit';
import StartLayout from './StartLayout';
import Header from '../../components/Header';
import Main from './Main';
import SearchContainer from './SearchContainer';
import SearchTitle from './SearchTitle';
import Loader from '../../components/Loader';
import {SearchString, Dropdown, Button} from '../../../../common';
import useSearchString from '../../../../../hooks/useSearchString';
import {fetchChords} from '../../../../../slices/chords/chordsSlice';
import Buttons from '../Main/Buttons';
import Search from "../../../../common/Search";

function Chords() {
    const history = useHistory();
    const {path} = useRouteMatch();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.chords.loading);

    const {
        chordsItems,
        chordType,
        onChangeChordTypeHandler,
    } = useSearchString();

    const onSearchHandler = async () => {
        dispatch(fetchChords())
            .then(unwrapResult)
            .then((chords) => history.push(`${path}/main/${chords[0].chordId}`));
    };

    const onCreateChordHandler = () => history.push(`${path}/main/add`);

    return (
        <StartLayout areas={['header', 'main']} rows='70px 1fr' gap='space-10'>
            <GridItem area='header'>
                <Header>
                    <h1>Связки</h1>
                    <Buttons>
                        <Button
                            iconLeft={<PlusIcon />}
                            onClick={onCreateChordHandler}
                        >
                            Создать связку
                        </Button>
                    </Buttons>
                </Header>
            </GridItem>
            <GridItem area='main'>
                <Main>
                    {loading ? (
                        <Loader />
                    ) : (
                        <SearchContainer>
                            <SearchTitle>Для поиска связки выбери ее тип и критерий поиска</SearchTitle>
                            <Dropdown
                                placeholder="Выберите тип связки"
                                value={chordType}
                                items={chordsItems}
                                onChange={onChangeChordTypeHandler}
                            />
                            <Search onSearch={onSearchHandler} />
                        </SearchContainer>
                    )}
                </Main>
            </GridItem>
        </StartLayout>
    );
}

export default Chords;
