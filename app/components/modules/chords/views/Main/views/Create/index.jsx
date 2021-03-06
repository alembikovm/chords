import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Input} from 'fronton-react';
import {Dropdown} from '../../../../../../common';
import {ChordTable} from '../../components';
import CreateWrapper from './CreateWrapper';
import FormGroup from './FormGroup';
import FooterButtons from './components/FooterButtons';

function Create() {
    const history = useHistory();
    const [chordType, setChordType] = useState('');
    const [chord, setChord] = useState({
        entityId: '',
        baseEntity: {},
        relatedEntities: [],
    });
    const [isChordTypeSelected, setIsChordTypeSelected] = useState(false);
    const [searchString, setSearchString] = useState('');

    const chordsItems = [
        {id: 1, value: 'Компоненты'},
        {id: 2, value: 'Дублоны'},
        {id: 3, value: 'Похожие товары'},
        {id: 4, value: 'Комплименты'},
        {id: 5, value: 'Замена'},
    ];

    const onChangeSearchString = (event) => {
        setSearchString(event.target.value);
    };

    const onChangeChordTypeHandler = (event) => {
        setIsChordTypeSelected(true);
        setChordType(event.target.value);
    };

    const onCancelCreate = () => {
        history.push('/chords/main');
    };

    return (
        <CreateWrapper>
            <h2>Создание связки</h2>
            <FormGroup>
                <Dropdown
                    placeholder="Выберите тип связки"
                    label='Тип связки'
                    value={chordType}
                    items={chordsItems}
                    onChange={onChangeChordTypeHandler}
                />
                {isChordTypeSelected && (
                    <Input
                        inputSize='m'
                        label='Поиск SKU'
                        placeholder='Введите SKU, чтобы добавить в связку'
                        value={searchString}
                        onChange={onChangeSearchString}
                    />
                )}
            </FormGroup>
            {isChordTypeSelected && (
                <ChordTable chord={chord} />
            )}
            <FooterButtons onCancel={onCancelCreate} />
        </CreateWrapper>
    );
}

export default Create;
