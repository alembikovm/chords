import {useState} from 'react';

// this.state = {
//     chordType: '',
//     searchString: '',
//     searchBy: 'Поиск по SKU',
//     disableSearch: true,
// };

function useSearchString() {
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

    const [chordType, setChordType] = useState('');
    const [searchString, setSearchString] = useState('');
    const [searchBy, setSearchBy] = useState('Поиск по SKU');
    const [disableSearch, setDisableSearch] = useState(true);

    function onChangeChordTypeHandler(event) {
        setChordType(event.target.value);
        setDisableSearch(false);
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
        chordType,
        searchString,
        searchBy,
        disableSearch,
        onChangeChordTypeHandler,
        onChangeSearchString,
        onChangeSearchBy,
    };
}

export default useSearchString;