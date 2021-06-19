import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {
    Button,
    Dropdown,
    Input,
} from '../';
import SearchIcon from '../icons/SearchIcon';
import SearchStringContainer from './SearchStringContainer';

function SearchString(props) {
    return (
        <SearchStringContainer
            inputSize='m'
            allowClear
            startAdornment={
                <Dropdown
                    size='s'
                    value={props.dropdownValue}
                    items={props.dropdownItems}
                    disabled={props.disabled}
                    onChange={props.onDropdownChange}
                />
            }
            endAdornment={
                <Button
                    as={ReactRouterLink}
                    to={props.to}
                    size='s'
                    icononly
                    disabled={props.disabled}
                    onClick={props.onSearch}
                >
                    <SearchIcon size='24px' />
                </Button>
            }
            {...props}
        />
    );
}

export default SearchString;
