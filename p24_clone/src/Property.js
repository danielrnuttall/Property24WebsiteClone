import React from 'react'

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import PropPlace from './PropPlace';

const mapStyle = {
    width: '50%',
    height: '40%',
};

class Property extends React.Component { 
    render() {
         
        return (
            <div className="section" class="mt-5">
                <div class="row">
                    <h3>{this.props.location.state.name}</h3>
                </div>
                <div class="row">
                    <p>{this.props.location.state.description}</p>
                </div>
                <div class="row">
                    <div class="col">
                        <img src={this.props.location.state.img} alt="Italian Trulli" style={{width:300}}/>
                    </div>
                    <div class="col">
                        <h2>Price: {this.props.location.state.price}</h2>
                    </div>
                </div>
                <div class="row">
                    <PropPlace mapStyles ={mapStyle} pos = {this.props.location.state.pos}/>
                </div>
            </div>
        );
    }
} 
export default Property