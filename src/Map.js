import React from 'react';
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class Map extends React.Component {
    componentDidMount() {
      this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9'
      });
    }
  
    componentWillUnmount() {
      this.map.remove();
    }
  
    render() {
    
      const style = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%'
      };
  
      return <div id="content" style={style} ref={el => this.mapContainer = el} />;
    }
  }

export default Map