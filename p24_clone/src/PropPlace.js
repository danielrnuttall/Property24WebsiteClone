import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const Lat = {
  lat: parseFloat('47.444, -12.176'.split(', ')[0]),
  lng: parseFloat('47.444, -12.176'.split(', ')[1]) 
};

export class MapContainer extends React.Component {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}

              style={this.props.mapStyles}
              initialCenter={Lat}// set his senter via prop
              
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
            <Marker position={{ lat: 48.00, lng: -122.00}} />
            </Map>
        );
      }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAweKlALHrKRCH2tA97Zkz9optW5GN_Wmw'
})(MapContainer)