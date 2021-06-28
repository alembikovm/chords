import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentChordType} from '../slices/chords/chordsSlice';

function useSearchString() {
    const dispatch = useDispatch();

    const chordsItems = [
        {id: 1, value: 'Компоненты'},
        {id: 2, value: 'Дублоны'},
        {id: 3, value: 'Похожие\xa0товары'},
        {id: 4, value: 'Комплементы'},
        {id: 5, value: 'Замена'},
    ];

    const searchByItems = [
        {id: 1, value: 'Поиск\xa0по\xa0SKU'},
        {id: 2, value: 'Поиск\xa0по\xa0отделу'},
        {id: 3, value: 'Поиск\xa0по\xa0подотделу'},
        {id: 4, value: 'Поиску\xa0по\xa0типу'},
        {id: 5, value: 'Поиск\xa0по\xa0подтипу'},
        {id: 6, value: 'Поиск\xa0по\xa0модели'},
    ];

    const chordType = useSelector((state) => state.chords.currentChordType);
    const [templateTypeId, setTemplateTypeId] = useState('');
    const [searchString, setSearchString] = useState('');
    const [searchBy, setSearchBy] = useState('Поиск по SKU');

    function onChangeTemplateTypeIdHandler(event) {
        setTemplateTypeId(event.target.id);
    }

    function onChangeChordTypeHandler(event) {
        dispatch(setCurrentChordType(event.target.value));
    }

    function onChangeSearchString(event) {
        setSearchString(event.target.value);
    }

    function onChangeSearchBy(event) {
        setSearchBy(event.target.value);
    }

    return {
        chordsItems,
        searchByItems,
        templateTypeId,
        chordType,
        searchString,
        setSearchString,
        searchBy,
        onChangeChordTypeHandler,
        onChangeSearchString,
        onChangeSearchBy,
        onChangeTemplateTypeIdHandler,
    };
}

export default useSearchString;
