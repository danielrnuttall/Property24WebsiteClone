import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import logIn from './logIn';
import signUp from "./SignUp";
import properties from './properties';
import Navbar from './Navbar';
import Property from './Property';

import * as serviceWorker from './serviceWorker';

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import './index.css';

import {createStore} from 'redux';
import { Provider } from 'react-redux';

const store = createStore();


const routing = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Navbar/>
      <div className="container">
        <Route exact path="/" component={App} />
        <Route path="/logIn" component={logIn} />
        <Route path="/SignUp" component={signUp} />
        <Route path="/properties" component={properties} />
        <Route path="/Property" component={Property} />
      </div>
    </Router>
  </Provider>
  )

ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
