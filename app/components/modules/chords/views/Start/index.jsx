import React from 'react';
import Container from './Container';
import ContentWrapper from './ContentWrapper';
import {SearchString, Dropdown} from '../../../../common';

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
                        placeholder="Выберите тип связки"
                        value={this.state.chordType}
                        items={chordsItems}
                        onChange={this.onChangeChordTypeHandler}
                    />
                    <SearchString
                        value={this.state.searchString}
                        placeholder="Введи SKU"
                        disabled={this.state.disableSearch}
                        dropdownValue={this.state.searchBy}
                        dropdownItems={searchByItems}
                        to='/chords/main'
                        onDropdownChange={this.onChangeSearchBy}
                        onChange={this.onChangeSearchString}
                        onSearch={this.onSearchHandler}
                    />
                </ContentWrapper>
            </Container>
        );
    }
}

export default Chords;
