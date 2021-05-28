import React from 'react';
import {Link as ReactRouterLink, Route} from 'react-router-dom';
import {Input, Button, Icon} from 'fronton-react';
import { Dropdown, DropdownItem } from "fronton-react/unstable";
import Container from './Container';
import ContentWrapper from './ContentWrapper';
import Search from "../Search";

class Chords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chordType: '',
            searchString: '',
            searchBy: 'Поиск по SKU',
            disableSearch: true,
        };
    }

    onChangeChordTypeHandler = (event) => {
        this.setState(() => ({
            chordType: event.target.value,
            disableSearch: false,
        }));
    }

    onChangeSearchString = (event) => {
        this.setState(() => ({searchString: event.target.value}));
    }

    onChangeSearchBy = (event) => {
        this.setState(() => ({searchBy: event.target.value}));
    }

    onSearchHandler = (event) => {
        console.log('searching...');
    }

    render() {
        const chordsItems = [
            {id: 1, value: 'Компоненты'},
            {id: 2, value: 'Дублоны'},
            {id: 3, value: 'Похожие товары'},
            {id: 4, value: 'Комплименты'},
            {id: 5, value: 'Замена'},
        ];
        const searchByItems = [
            {id: 1, value: 'Поиск по SKU'},
            {id: 2, value: 'Поиск по отделу'},
            {id: 3, value: 'Поиск по подотделу'},
            {id: 4, value: 'Поиску по типу'},
            {id: 5, value: 'Поиск по подтипу'},
            {id: 6, value: 'Поиск по модели'},
        ];

        return (
            <Container>
                <ContentWrapper>
                    <div>
                        Для поиска связки выбери ее тип и критерий поиска
                    </div>
                    <Dropdown
                        size="m"
                        placeholder="Выберите тип связки"
                        value={this.state.chordType}
                    >
                        {chordsItems.map(
                            ({id, value}) =>
                                (
                                    <DropdownItem
                                        size="m"
                                        key={id}
                                        id={id}
                                        value={value}
                                        onChange={this.onChangeChordTypeHandler}
                                    >
                                        {value}
                                    </DropdownItem>
                                )
                        )}
                    </Dropdown>
                    <Input
                        value={this.state.searchString}
                        onChange={this.onChangeSearchString}
                        placeholder="Введи SKU"
                        inputSize="m"
                        allowClear
                        disabled={this.state.disableSearch}
                        startAdornment={
                            <Dropdown
                                size="s"
                                value={this.state.searchBy}
                                disabled={this.state.disableSearch}
                            >
                                {searchByItems.map(
                                    ({id, value}) =>
                                        (
                                            <DropdownItem
                                                size="m"
                                                key={id}
                                                id={id}
                                                value={value}
                                                onChange={this.onChangeSearchBy}
                                            >
                                                {value}
                                            </DropdownItem>
                                        )
                                )}
                            </Dropdown>
                        }
                        endAdornment={
                            <Button
                                as={ReactRouterLink}
                                to="/chords/search"
                                kind="regular"
                                size="s"
                                variant="primary"
                                iconOnly
                                disabled={this.state.disableSearch}
                                onClick={this.onSearchHandler}
                            >
                                <Icon name="search" size="s" />
                            </Button>
                        }
                    />
                </ContentWrapper>
                <Route path="/chords/search">
                    <Search />
                </Route>
            </Container>
        );
    }
}

export default Chords;
