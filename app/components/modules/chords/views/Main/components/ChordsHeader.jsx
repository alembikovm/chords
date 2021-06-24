import React, { useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { PlusIcon, useUniqID } from 'fronton-react';
import Buttons from '../Buttons';
import { SearchString, Dropdown, Button } from '../../../../../common';
import Loader from './Loader';
import useSearchString from '../../../../../../hooks/useSearchString';
import FilterIcon from '../../../../../common/icons/FilterIcon';

function ChordsHeader(props) {
    const {
        chordsItems,
        searchByItems,
        chordType,
        templateTypeId,
        searchString,
        searchBy,
        onChangeChordTypeHandler,
        onChangeSearchString,
        onChangeSearchBy,
        onChangeTemplateTypeIdHandler,
    } = useSearchString();

    const history = useHistory();
    const { path } = useRouteMatch();

    const onCreateChordHandler = () => history.push(`${path}/add`);

    const onSearchHandler = useCallback(
        () => {
            // Change the searchURL to API URL + searchString, when API will be ready
            const searchURL = 'https://run.mocky.io/v3/920c336c-197e-4e24-a67f-63fe1ebff46f'
            props.onClickSearchHandler(searchURL)
        },
        [props.onClickSearchHandler],
    );

    const templateListWithLinks = props.templateList.map(template => ({ id: template.id, value: <a href={template.href} target="_blank">{template.value}</a> }));
    const templateListListWithDownload = [{ id: useUniqID(), value: <a href="#">Загрузить</a> }, ...templateListWithLinks];

    return (
        <Buttons>
            <div style={{ maxWidth: '256px', minWidth: '256px' }}>
                <Dropdown
                    placeholder='Выберите тип связки'
                    value={chordType}
                    items={chordsItems}
                    onChange={onChangeChordTypeHandler}
                />
            </div>
            <div style={{ maxWidth: '412px', minWidth: '300px' }}>
                <SearchString
                    value={searchString}
                    placeholder="Введи SKU"
                    disabled={!chordType}
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
                disabled={!chordType}
                onClick={props.onFilterClick}
            >
                Фильтр
            </Button>
            <div style={{ maxWidth: '150px', width: '100%' }}>
                {props.templateLoading ? (
                    <Loader size='s' />
                ) : (
                    <Dropdown
                        placeholder="Шаблон"
                        value={templateTypeId}
                        items={templateListListWithDownload}
                        onChange={onChangeTemplateTypeIdHandler}
                    />
                )}
            </div>
            <Button
                onClick={onCreateChordHandler}
                iconLeft={<PlusIcon />}
            >
                Создать связку
            </Button>
        </Buttons>
    );
}

export default ChordsHeader;