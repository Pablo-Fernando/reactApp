import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Mail from '@material-ui/icons/Mail'
import contacto from './contacto.jpeg'

const styles = theme => ({
   card: {
      maxWidth: 500,
   },
   media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
   },
   actions: {
      display: 'flex',
   },
   expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
         duration: theme.transitions.duration.shortest,
      }),
   },
   expandOpen: {
      transform: 'rotate(180deg)',
   },
   avatar: {
      backgroundColor: purple[500],
   },
});

class RecipeReviewCard extends React.Component {
   state = { expanded: false };

   handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
   };

   render() {
      const { classes } = this.props;

      return (
         <Card className={classes.card}>
            <CardHeader
               avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                     W
                  </Avatar>
               }
               title="Contacto"
               subheader="Contacta con los desarrolladores de watchicolito"
               disableTypography
            />
            <CardMedia
               className={classes.media}
               image={contacto}
               title="Contacto"
            />
            <CardContent>
               <Typography variant="h4" >¿Tienes dudas?</Typography>
               <Typography component="p">
                  Comunícate con nosotros a través de los siguientes medios.
               </Typography>
            </CardContent>
            <CardActions className={classes.actions} >
               <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
               </IconButton>
               <IconButton aria-label="Share">
                  <ShareIcon />
               </IconButton>
               <IconButton aria-label="Mail">
                  <Mail />
               </IconButton>
            </CardActions>
         </Card>
         );
      }
}

RecipeReviewCard.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);