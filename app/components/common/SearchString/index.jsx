import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {
    Button,
    Dropdown,
    Input,
} from '../';
import SearchIcon from '../icons/SearchIcon';
import SearchStringContainer from './SearchStringContainer';
// import SearchStringWeb from '@lmui/search-string-module';

function SearchString(props) {
    return (
        // <SearchStringWeb />
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
                    iconOnly
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
