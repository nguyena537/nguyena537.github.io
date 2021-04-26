import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';

import Home from './Home/Home';
import Videos from './Videos/Videos';
import Contact from './Contact/Contact';
import About from './About/About';

class App extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/videos" component={Videos} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Fragment>
        );
    }
};

export default App; 