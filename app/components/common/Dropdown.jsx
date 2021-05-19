import React from 'react';
import {Dropdown as FrontonDropdown, DropdownItem} from 'fronton-react/unstable';

function Dropdown({options, ...props}) {
    return (
        <FrontonDropdown size="m" {...props}>
            {options.map(({id, value}) => (
                <DropdownItem id={id} key={id}>
                    {value}
                </DropdownItem>
            ))}
        </FrontonDropdown>
    );
}

export default Dropdown;
