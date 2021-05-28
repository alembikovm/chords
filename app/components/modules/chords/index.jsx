import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import Main from './Main';
import Search from "./Search";

export default [
    <Route exact path="/">
        <Redirect to="/chords" />
    </Route>,
    <Route exact path="/chords">
        <Main />
    </Route>,
    <Route path="/chords/search">
        <Search/>
    </Route>
];
