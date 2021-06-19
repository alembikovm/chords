import React, { useCallback } from 'react';
import {useHistory} from 'react-router-dom';
import {PlusIcon} from 'fronton-react';
import FilterIcon from '../../../../common/icons/FilterIcon';
import {Button, Dropdown, SearchString} from '../../../../common';
import ChordsHeaderWrapper from './ChordsHeaderWrapper';
import useSearchString from '../../../../../hooks/useSearchString';

function ChordsHeader(props) {
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

    
    const onSearchHandler = useCallback(
      () => {
        // Change the searchURL to API URL + searchString, when API will be ready
        const searchURL = 'https://run.mocky.io/v3/920c336c-197e-4e24-a67f-63fe1ebff46f'
         props.onClickSearchHandler(searchURL)
      },
      [props.onClickSearchHandler],
    )
    
    

    const history = useHistory();
    const onCreateChordHandler = () => history.push('/chords/main/create');

    return (
        <ChordsHeaderWrapper>
            <div style={{maxWidth: '256px', width: '100%'}}>
                <Dropdown
                    placeholder="Выберите тип связки"
                    value={chordType}
                    items={chordsItems}
                    onChange={onChangeChordTypeHandler}
                />
            </div>
            <div style={{maxWidth: '412px', minWidth: '300px'}}>
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
            </div>
            <Button
                iconLeft={<FilterIcon />}
                variant='pseudo'
                disabled={disableSearch}
                onClick={props.onFilterClick}
            >
                Фильтр
            </Button>
            <Button
                onClick={onCreateChordHandler}
                iconLeft={<PlusIcon />}
            >
                Создать связку
            </Button>
        </ChordsHeaderWrapper>
    );
}

export default ChordsHeader;
