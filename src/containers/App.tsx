import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Videos from './Videos/Videos';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/videos" component={Videos} />
            </Switch>
        );
    }
};

export default App;