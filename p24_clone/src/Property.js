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
                    <h3>Property name</h3>
                </div>
                <div class="row">
                    <p>Property discription</p>
                </div>
                <div class="row">
                    <PropPlace mapStyles ={mapStyle}/>
                </div>
            </div>
        );
    }
} 
export default Property