import React from 'react'

import {Link} from 'react-router-dom';

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import PropPlace from './PropPlace';

import FindProperty from './FindProperty';

import {connect} from 'react-redux'

const mapStyles = {
  width: '100%',
  height: '40%',
};

var counter = 0;

class properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        search: ''
    };
  }

  render() {
    const { properties } = this.props; 

    const propList = properties.length ? (
        properties.map(properties =>{
          if(this.props.location.state.search == properties.name){
            counter++;
            return (
              <div class="col s12 m6">
                  <div class="card blue-grey darken-1 hoverable">
                  <Link to={{
                      pathname: '/Property',
                      state: {
                        name: properties.name,
                        description: properties.description,
                        price: properties.price,
                        pos: properties.location,
                        img: properties.imageURL
                      }
                    }}>
                    <div class="card-content white-text">
                      <span class="card-title">{properties.name}</span>
                      <p>{properties.description}</p>
                    </div>
                  </Link>
                    <div>
                    <PropPlace mapStyles ={mapStyles} pos = {properties.location}/>
                    </div>
                  </div>
              </div>
            )
          }else if(this.props.location.state.search == '' || this.props.location.state.search === null){
            counter++;
            return (
              <div class="col s12 m6">
                  <div class="card blue-grey darken-1 hoverable">
                  <Link to={{
                      pathname: '/Property',
                      state: {
                        name: properties.name,
                        description: properties.description,
                        price: properties.price,
                        pos: properties.location,
                        img: properties.imageURL
                      }
                    }}>
                    <div class="card-content white-text">
                      <span class="card-title">{properties.name}</span>
                      <p>{properties.description}</p>
                    </div>
                  </Link>
                    <div>
                    <PropPlace mapStyles ={mapStyles} pos = {properties.location}/>
                    </div>
                  </div>
              </div>
            )
          }
        })
        
    ) : (<div>no properties found</div>)
    return (
      <div class="mt-5">
        <div class="row light-blue darken-2">
          <FindProperty/>
        </div>

        <div class="row mt-5">
          {propList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    properties: state.properties
  }
}

export default connect(mapStateToProps)(properties);