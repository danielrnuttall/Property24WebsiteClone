import React from 'react'

import {Link} from 'react-router-dom';

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import PropPlace from './PropPlace';

class properties extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col s12 m6">
          
            <div class="card blue-grey darken-1 hoverable">
            <Link to = "/Property">
              <div class="card-content white-text">
                <span class="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
            </Link>
              <div>
                <PropPlace/>
              </div>
            </div>
          
        </div>

        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text hoverable">
              <span class="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>

            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text hoverable">
              <span class="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text hoverable">
              <span class="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default properties;