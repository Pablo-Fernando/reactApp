import React from 'react';
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'; 


mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';


class Map extends React.Component {
    
  state = {
    latitude : 0,
    longitude : 0
  }
  
  componentDidMount() {
    this.getLocation()
  }

  getLocation= () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.getPosition.bind(this));
    }
  };
  componentDidUpdate(){
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/satellite-streets-v10?optimize=true',
      zoom: 19,
      center:[this.state.longitude,this.state.latitude]
    });
  }

  getPosition(position){
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    },()=> console.log(this.state));
  };    

  
  componentWillUnmount() {
    this.map.remove();
  }
  
  render() {
    const style = {
      position: 'absolute',
      width: '80%',
      height: '80%'
    };

    return (
      <div color="primary">
        <h1>Nueva Denuncia</h1>
          <div id="content" style={style} ref={el => this.mapContainer = el} />
      </div>
    );
  }
  
}

export default Map