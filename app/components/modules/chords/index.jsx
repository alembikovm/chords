import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import Main from './Main';

export default [
    <Route exact path="/">
        <Redirect to="/chords" />
    </Route>,
    <Route path="/chords">
        <Main />
    </Route>
];
