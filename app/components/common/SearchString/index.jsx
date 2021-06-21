import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {
    Button,
    Dropdown,
    Input,
} from '../';
import SearchIcon from '../icons/SearchIcon';
import SearchStringContainer from './SearchStringContainer';

function SearchString({
    dropdownValue,
    dropdownItems,
    disabled,
    onDropdownChange,
    onSearch,
    ...props
}) {
    return (
        <SearchStringContainer
            inputSize='m'
            allowClear
            startAdornment={
                <Dropdown
                    size='s'
                    value={dropdownValue}
                    items={dropdownItems}
                    disabled={disabled}
                    onChange={onDropdownChange}
                />
            }
            endAdornment={
                <Button
                    size='s'
                    iconOnly
                    disabled={disabled}
                    onClick={onSearch}
                >
                    <SearchIcon size='24px' />
                </Button>
            }
            {...props}
        />
    );
}

export default SearchString;
