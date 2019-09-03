import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import logIn from './logIn';
import signUp from './signUp';
import properties from './properties';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
          <div class="header">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/logIn">logIn</Link>
                </li>
                <li>
                    <Link to="/signUp">SignUp</Link>
                </li>
            </ul>
        </div>

        <Route exact path="/" component={App} />
        <Route path="/logIn" component={logIn} />
        <Route path="/signUp" component={signUp} />
        <Route path="/properties" component={properties} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'))


serviceWorker.unregister();
