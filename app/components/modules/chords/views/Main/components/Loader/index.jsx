import React from 'react';
import {Loader as FrontonLoader} from 'fronton-react';
import LoaderWrapper from './LoaderWrapper';

function Loader({size = 'xl'}) {
    return (
        <LoaderWrapper>
            <FrontonLoader size={size} />
        </LoaderWrapper>
    );
}

export default Loader;
