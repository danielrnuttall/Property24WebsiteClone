import React from 'react'

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

class login extends React.Component {
  render() {
    return (
      <div className="section">
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate"/>
            <label for="email">Email</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate"/>
            <label for="password">Password</label>
          </div>
        </div>

        <div className="row justify-content-center">
            <button class="btn waves-effect waves-light" type="submit" name="action">Sign In</button>
        </div>
      </div>
    );
  }
}
export default login