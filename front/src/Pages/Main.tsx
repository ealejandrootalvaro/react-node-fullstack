import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Login from '../Pages/Login/Login';
import Header from './Header';

export default function Main() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

function Home() {
    return <h1>Home</h1>
}