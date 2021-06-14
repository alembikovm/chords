import React from 'react';
import {Dropdown as DropdownFronton} from 'fronton-react/unstable';
import DropdownItem from './DropdownItem';

function Dropdown(props) {
    return (
        <DropdownFronton
            size='m'
            {...props}
        >
            {props.items.map(({id, value}) =>(
                <DropdownItem
                    key={id}
                    id={id}
                    size='m'
                    value={value}
                    onChange={props.onChange}
                >
                    {value}
                </DropdownItem>
            ))}
        </DropdownFronton>
    );
}

export default Dropdown;
