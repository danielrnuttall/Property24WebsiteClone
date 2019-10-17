import React from 'react';

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import './App.css';

import {Link} from 'react-router-dom';


class FindProperty extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        search: ''
    };
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <form class="col 12">
        <div class="input-field col s6">
          <input placeholder="Search for a City, Suburb or Web Ref..." id="search" type="text" class="black-text white mt-2" name ='search' value={this.state.search} onChange={e => this.handleChange(e)}/>
          <label for="search" class="white-text">For sale</label>
        </div>
        <Link to={{
          pathname: '/properties',
          state: {
            search: this.state.search
          }
        }}>
          <a class="waves-effect white-text btn red mt-4">Search</a>
        </Link>
      </form>);
  }
}


export default FindProperty;
