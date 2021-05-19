import React from 'react';
import {Route} from "react-router-dom";
import {Chords, Foo} from "../components/modules";

export default () => {
    return (
        <>
            <Route exact path="/">
                <Chords />
            </Route>
            <Route path="/foo">
                <Foo />
            </Route>
        </>
    );
}
