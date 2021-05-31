import React from 'react';
import {Dropdown as DropdownFronton, DropdownItem} from 'fronton-react/unstable';

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
