import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LocaleProvider from './components/LocaleProvider';
import App from './containers/App';
import './_reboot.scss';

ReactDOM.render(
    <LocaleProvider>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </LocaleProvider>,
    document.getElementById("root")
);