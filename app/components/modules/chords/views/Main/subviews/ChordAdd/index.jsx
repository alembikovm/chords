import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import ChordAddWrapper from './ChordAddWrapper';
import FormGroup from './FormGroup';
import FooterButtons from '../../components/FooterButtons';
import {Button, Dropdown, FullWidthInput} from '../../../../../../common';
import Table from '../../components/Table';
import {renderToStaticNodeStream} from "react-dom/server";

function ChordAdd() {
    const history = useHistory();
    const [chordType, setChordType] = useState('');
    const [isChordTypeSelected, setIsChordTypeSelected] = useState(false);
    const [searchString, setSearchString] = useState('');

    const chordsItems = [
        {id: 1, value: 'Компоненты'},
        {id: 2, value: 'Дублоны'},
        {id: 3, value: 'Похожие товары'},
        {id: 4, value: 'Комплименты'},
        {id: 5, value: 'Замена'},
    ];

    const onChangeChordTypeHandler = (event) => {
        setIsChordTypeSelected(true);
        setChordType(event.target.value);
    };

    const onChangeSearchString = (event) => {
        setSearchString(event.target.value);
    };

    const onCancel = () => history.go(-1);

    return (
        <ChordAddWrapper>
            <h2>Создание связки</h2>
            <FormGroup>
                <Dropdown
                    placeholder="Выберите тип связки"
                    label='Тип связки'
                    value={chordType}
                    items={chordsItems}
                    size='lg'
                    onChange={onChangeChordTypeHandler}
                />
                {isChordTypeSelected && (
                    <FullWidthInput
                        inputSize='lg'
                        label='Поиск SKU'
                        placeholder='Введите SKU, чтобы добавить в связку'
                        value={searchString}
                        onChange={onChangeSearchString}
                    />
                )}
            </FormGroup>
            <Table rows={[]} />
            <FooterButtons>
                <Button variant='secondary' onClick={onCancel}>Отменить</Button>
                <Button>Сохранить изменения</Button>
            </FooterButtons>
        </ChordAddWrapper>
    );
}

export default ChordAdd;
