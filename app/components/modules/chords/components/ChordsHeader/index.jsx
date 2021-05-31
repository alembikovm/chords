import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {PlusIcon} from 'fronton-react';
import {toggleShowFilters} from '../../../../../slices/chords/chordsSlice';
import FilterIcon from '../../../../common/icons/FilterIcon';
import {Button, Dropdown, SearchString} from '../../../../common';
import ChordsHeaderWrapper from './ChordsHeaderWrapper';
import useSearchString from '../../../../../hooks/useSearchString';

function ChordsHeader() {
    const dispatch = useDispatch();
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

    const onFiltersClick = () => {
        dispatch(toggleShowFilters());
    };

    const onSearchHandler = () => {
        console.log('Search...');
    };

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
            <div style={{maxWidth: '412px', width: '100%'}}>
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
                onClick={onFiltersClick}
            >
                Фильтр
            </Button>
            <Button
                as={ReactRouterLink}
                to="/chords/main/create"
                iconLeft={<PlusIcon />}
            >
                Создать связку
            </Button>
        </ChordsHeaderWrapper>
    );
}

export default ChordsHeader;