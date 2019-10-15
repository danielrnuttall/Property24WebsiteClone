import React from 'react'

import {Link} from 'react-router-dom';

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import PropPlace from './PropPlace';

import FindProperty from './FindProperty';

const mapStyles = {
  width: '100%',
  height: '40%',
};

class properties extends React.Component {
  render() {
    return (
      <div class="mt-5">
        <div class="row light-blue darken-2">
          <FindProperty/>
        </div>

        <div class="row mt-5">
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
                <PropPlace mapStyles ={mapStyles}/>
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

      </div>
    );
  }
}
export default properties;