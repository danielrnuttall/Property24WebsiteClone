import React from 'react';

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import './App.css';

import Properties from './properties';



function FindProperty() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <form class="col s12">
        <div class="input-field col s6">
            <input placeholder="Search for a City, Suburb or Web Ref..." id="search" type="text" class="black-text white mt-2"/>
            <label for="search" class="white-text">For sale</label>
        </div>

        <a class="waves-effect white-text btn red mt-4" onClick={handleShow}>Search</a>

        { show ? <Properties /> : null }

    </form>
  );
}

export default FindProperty;
