import React from 'react';
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'; 
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '@mapbox/mapbox-sdk'
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const darkTheme = createMuiTheme({
	palette: {

    type: 'dark', // Switching the dark mode on is a single property value change.
	},
	typography: { useNextVariants: true },
});


class Map extends React.Component {
    
  state = {
    latitude : 0,
    longitude : 0,
    lat : 0,
    lng : 0,
    addres :''
  }
  
  componentDidMount() {
    this.getLocation()
  }

  getLocation= () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.getPosition.bind(this));
    }
  };
  getPosition(position){
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      lat: position.coords.latitude,
      lng: position.coords.longitude
    },()=> console.log(this.state));
  };  
  componentDidUpdate(){
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/satellite-streets-v10?optimize=true',
      zoom: 16,
      center:[this.state.longitude,this.state.latitude]
    });
    const map = this.map;
    
    const marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([this.state.lng,this.state.lat])
      .addTo(map);
       
      
       
      marker.on('dragend', onDragEnd.bind(this));

      map.addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: map ,
        types: 'poi',
        onSelect:this.onSelect
      }));

      map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        }));
      
      function onSelect(value) {
        console.log(value);   
      }

      function onDragEnd() {
        let lngLat = marker.getLngLat();
        
      }

      let geocodingClient = {
        accessToken: mapboxgl.accessToken
      }

      /*geocodingClient.reverseGeocode({
        query: [-95.4431142, 33.6875431],
        limit: 2
      }).send().then(response => {
          // GeoJSON document with geocoding matches
          console.log("response "+response.body);
        });*/
    
  }
  
  
  

  
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
      <MuiThemeProvider theme={darkTheme}>
        <Typography variant="display2" color="main">Nueva denuncia</Typography>
        <div id="content" style={style} ref={el => this.mapContainer = el} />
      </MuiThemeProvider>
    );
  }
  
}

export default Map;