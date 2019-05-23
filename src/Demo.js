import React from 'react';
import {geolocated} from 'react-geolocated';
 
class Demo extends React.Component {
  render() {
    return /*<div className={classes.toolbar} >
    <Divider />
    <List>
      <ListItem button id="denuncia" onClick= {()=> this.handleClick(document.getElementById('denuncia').id) } >
        <ListItemIcon> <AddAlertIcon /> </ListItemIcon>
        <ListItemText primary="Nueva denuncia" />
      </ListItem>
      <ListItem button id="Denuncias Resultas">
        <ListItemIcon> <SearchIcon /> </ListItemIcon>
          <ListItemText primary="Denuncias resultas" />
      </ListItem>
      <ListItem button key="Contacto">
        <ListItemIcon> <PermContactCalendarIcon /> </ListItemIcon>
          <ListItemText primary="Contacto" />
      </ListItem>
    </List>
    <Divider />
  </div>*/
  }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(Demo);