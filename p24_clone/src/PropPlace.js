import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const Lat = (props) =>{
  var pos = props.pos;
  return({
    lat: parseFloat(pos.split(', ')[0]),
    lng: parseFloat(pos.split(', ')[1])
  })
}

export class MapContainer extends React.Component {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              
              style={this.props.mapStyles}
              initialCenter={Lat(this.props)}// set his senter via prop
              
              defaultOptions={{
                streetViewControl: false,
                scaleControl: false,
                mapTypeControl: false,
                panControl: false,
                zoomControl: false,
                rotateControl: false,
                fullscreenControl: false,
              }}

              disableDefaultUI
            >
            <Marker position={Lat(this.props)} />
            </Map>
        );
      }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAweKlALHrKRCH2tA97Zkz9optW5GN_Wmw'
})(MapContainer)