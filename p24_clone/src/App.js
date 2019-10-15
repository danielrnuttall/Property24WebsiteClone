import React from 'react';

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import './App.css';

import FindProperty from './FindProperty';

function App() {
  return (
    <div class="light-blue darken-2 mt-5">
      <form >
        <div class="row ml-2 white-text" >
          <h1>Find Property for sale</h1>
        </div>
        
        <div class="row ml-2" >
          <FindProperty/>
        </div>
      </form>
    </div>
  );
}

export default App;
