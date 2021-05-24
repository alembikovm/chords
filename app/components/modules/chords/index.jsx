import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import View from './View';
import Search from './Search';

export default [
    <Route exact path="/">
        <Redirect to="/chords" />
    </Route>,
    <Route
        path="/chords"
        render={({match: {url}}) => (
            <>
                <Route exact path={`${url}/`} component={View} />
                <Route path={`${url}/search`} component={Search} />
            </>
        )}
    />
];