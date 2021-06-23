import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Main, Start} from './views';

export default [
    <Route exact path='/' key={1}>
        <Redirect to='/chords' />
    </Route>,
    <Route exact path='/chords' key={2}>
        <Start />
    </Route>,
    <Route path={`/chords/main`} key={3}>
        <Main />
    </Route>
];
