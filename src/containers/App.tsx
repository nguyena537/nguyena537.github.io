import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';

import Home from './Home/Home';
import Videos from './Videos/Videos';

class App extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/videos" component={Videos} />
                </Switch>
            </Fragment>
        );
    }
};

export default App;