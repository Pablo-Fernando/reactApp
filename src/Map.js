import React from 'react';
import mapboxgl from 'mapbox-gl'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {geolocated} from 'react-geolocated';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class Map extends React.Component {
    componentDidMount() {
      this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/satellite-streets-v10?optimize=true',
        zoom: 19,
        positionOptions: {enableHighAccuracy:false,timeout:6000},
        trackUserLocation: true,
        showUserLocation: true,
     });

    }
  
    componentWillUnmount() {
      this.map.remove();
    }
  
    render() {
    
      const style = {
        position: 'relative',
        top: 10,
        bottom: 10,
        width: '60vw',
        height: '60vh'
 
      };
  
      return (
        <div>
          <center><h1>Nueva Denuncia</h1></center>
          <div id="content" style={style} ref={el => this.mapContainer = el} />
        </div>
      );
    }
  }

export default Map