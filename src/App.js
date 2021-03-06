import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import SearchIcon from '@material-ui/icons/Search';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import Map from './Map';
import Contacto from './Contacto'
import Ayuda from './Ayuda'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



const drawerWidth = 240;



const cardStyle = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const darkTheme = createMuiTheme({
	palette: {

    type: 'dark', // Switching the dark mode on is a single property value change.
	},
	typography: { useNextVariants: true },
});

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
});


class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };



  handleClick(element) {

    switch(element){
      case 'denuncia':
        ReactDOM.render(<Map />, document.getElementById('mainContent'));
      break;
      case 'resuelta':
        //ReactDOM.render(<MapResolved/>,document.getElementById('mainContent'));
      break;
      case 'contacto':
        ReactDOM.render(<Contacto/>, document.getElementById('mainContent'));
      break;
      case 'ayuda':
        ReactDOM.render (<Ayuda/>,document.getElementById('mainContent'));
      break;
      default:
        console.log('default');
    }
  }
  

  render() {
    

    const { classes, theme } = this.props;

    const drawer = (
      <div>  
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button id="denuncia" onClick= {()=> this.handleClick(document.getElementById('denuncia').id) } >
            <ListItemIcon> 
              <AddAlertIcon /> 
            </ListItemIcon>
            <ListItemText primary="Nueva denuncia" />
          </ListItem>
          <ListItem button id="Denuncias Resultas">
            <ListItemIcon> 
              <SearchIcon /> 
            </ListItemIcon>
              <ListItemText primary="Denuncias resultas" />
          </ListItem>
          <ListItem button id="contacto"  onClick= {()=> this.handleClick(document.getElementById('contacto').id) }>
            <ListItemIcon>
              <PermContactCalendarIcon /> 
            </ListItemIcon>
            <ListItemText primary="Contacto" />
          </ListItem>
          <ListItem>
            <ListItemIcon button id="ayuda"  onClick= {()=> this.handleClick(document.getElementById('ayuda').id) }>
              <PermContactCalendarIcon/>
            </ListItemIcon>
            <ListItemText primary="Ayuda"/>
          </ListItem>
        </List>
        <Divider />
      </div>
        
    );

    return (
      <MuiThemeProvider theme={darkTheme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h2" color="inherit" noWrap>
                Watchicol
              </Typography>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={this.props.container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main  className={classes.content}>
            <div className={classes.toolbar} />
              <div id="mainContent">
              </div>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}




export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
