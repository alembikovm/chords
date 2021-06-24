import axios from 'axios';
import React, { Children } from 'react';
import Select from 'react-select';
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

function Chords() {
    const history = useHistory();
    const {path} = useRouteMatch();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.chords.loading);

    const {
        chordsItems,
        searchByItems,
        chordType,
        searchString,
        searchBy,
        onChangeChordTypeHandler,
        onChangeSearchString,
        onChangeSearchBy,
    } = useSearchString();

    const onSearchHandler = async () => {
        dispatch(fetchChords())
            .then(unwrapResult)
            .then((chords) => history.push(`${path}/main/${chords[0].chordId}`));
    };

    const onCreateChordHandler = () => history.push(`${path}/main/add`);

    // const loadOptions = () => axios.get('https://run.mocky.io/v3/40d978ed-1ce8-42b7-b0a8-f09be55cda41');

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    const customStyles = {
        option: (provided, { isSelected, isFocused }) => ({
            cursor: 'pointer',
            padding: 'var(--space-150) var(--space-200)',
            "&:hover": {
                backgroundColor: "#F2F3F5",
                ...(isSelected && { backgroundColor: "#464C5C" }),
            },
        }),
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--control-minor)',
            border: '0px',
            width: '118px',
        }),
        input: (provided) => ({
            ...provided,
            color: 'var(--text-primary)',
        }),
        menu: (provider) => ({
            ...provider,
            borderRadius: 'var(--rounding-m)',
            boxShadow: ' 0px 9px 33px rgba(0, 0, 0, 0.03), 0px 2px 18px rgba(0, 0, 0, 0.04), 0px 2px 10px rgba(0, 0, 0, 0.03), 0px 1.4px 5px rgba(0, 0, 0, 0.03), 0px 1.17px 2px rgba(0, 0, 0, 0.0196802);',
        }),
    };

    return (
        <StartLayout areas={['header', 'main']} rows='70px 1fr' gap='space-10'>
            <GridItem area='header'>
                <Header>
                    <h1>Связки</h1>
                    <Buttons>
                        <Select
                            options={options}
                            styles={customStyles}
                        />
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
                            <SearchString
                                value={searchString}
                                placeholder="Введи SKU"
                                disabled={!chordType}
                                dropdownValue={searchBy}
                                dropdownItems={searchByItems}
                                onDropdownChange={onChangeSearchBy}
                                onChange={onChangeSearchString}
                                onSearch={onSearchHandler}
                            />
                        </SearchContainer>
                    )}
                </Main>
            </GridItem>
        </StartLayout>
    );
}

export default Chords;
