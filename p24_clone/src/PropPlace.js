import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '40%',
};
 
export class MapContainer extends React.Component {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -12.176}}// set his senter via prop
              
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