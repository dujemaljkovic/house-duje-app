import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
    width: '90%',
    height: '90%'
}

const Gmap = props => (
    <React.Fragment>
    <Map
          google={props.google}
          zoom={11}
          style={mapStyles}
          initialCenter={{ lat: "43.562338", lng: 16.257188}}
    >
     <Marker position={{ lat: 43.562338, lng: 16.257188}} />
    </Map>
    </React.Fragment>
)

export default GoogleApiWrapper({
    apiKey:'AIzaSyDdNCVgP4pPQeLj-HPFUD84X3kVN1ortOo'
})(Gmap);