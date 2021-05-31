import React from 'react';
import {Button as ButtonFronton} from 'fronton-react';

function Button(props) {
    return (
        <ButtonFronton
            kind='regular'
            size='m'
            variant='primary'
            {...props}
        >
            {props.children}
        </ButtonFronton>
    );
}

export default Button;
