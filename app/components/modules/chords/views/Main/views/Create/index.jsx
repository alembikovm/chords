import React, {useState} from 'react';
import {Input} from 'fronton-react';
import {Dropdown, DropdownItem} from 'fronton-react/unstable';
import {ChordTable} from '../../components';
import CreateWrapper from './CreateWrapper';
import FormGroup from './FormGroup';
import FooterButtons from './components/FooterButtons';

function Create() {
    const [chordType, setChordType] = useState('');
    const [chord, setChord] = useState({
        relatedEntities: [],
    });

    const chordsItems = [
        {id: 1, value: 'Компоненты'},
        {id: 2, value: 'Дублоны'},
        {id: 3, value: 'Похожие товары'},
        {id: 4, value: 'Комплименты'},
        {id: 5, value: 'Замена'},
    ];

    const onChangeChordTypeHandler = (event) => {
        setChordType(event.target.value);
    }

    return (
        <CreateWrapper>
            <h2>Создание связки</h2>
            <FormGroup>
                <Dropdown
                    size="m"
                    placeholder="Выберите тип связки"
                    label='Тип связки'
                    value={chordType}
                >
                    {chordsItems.map(
                        ({id, value}) =>
                            (
                                <DropdownItem
                                    size="m"
                                    key={id}
                                    id={id}
                                    value={value}
                                    onChange={onChangeChordTypeHandler}
                                >
                                    {value}
                                </DropdownItem>
                            )
                    )}
                </Dropdown>
                <Input
                    inputSize='m'
                    label='Поиск SKU'
                    placeholder='Введите SKU, чтобы добавить в связку'
                />
            </FormGroup>
            <ChordTable chord={chord} />
            <FooterButtons />
        </CreateWrapper>
    );
}

export default Create;
