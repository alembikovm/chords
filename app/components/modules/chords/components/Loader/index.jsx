import React from 'react';
import {Loader as FrontonLoader} from 'fronton-react';
import LoaderWrapper from './LoaderWrapper';

function Loader() {
    return (
        <LoaderWrapper>
            <FrontonLoader size='xl' />
        </LoaderWrapper>
    );
}

export default Loader;
