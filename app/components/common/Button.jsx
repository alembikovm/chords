import React from 'react';
import {Button as FrontonButton} from 'fronton-react';

function Button(props) {
    return (
        <FrontonButton
            kind="regular"
            size="m"
            variant="primary"
            {...props}
        >
            {props.children}
        </FrontonButton>
    );
}

export default Button;
