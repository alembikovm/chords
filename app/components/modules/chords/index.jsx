import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Main, Start} from './views';

export default [
    <Route exact path='/'>
        <Redirect to='/chords' />
    </Route>,
    <Route exact path='/chords'>
        <Start />
    </Route>,
    <Route path={`/chords/main`}>
        <Main />
    </Route>
];
