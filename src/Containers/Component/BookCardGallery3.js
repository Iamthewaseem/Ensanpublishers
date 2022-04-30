import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Ayeen from '../Assets/AyeenZahidFront.jpeg';
import Daramadi from '../Assets/Daramadi.jpg'
import Didgah from '../Assets/Didgah.jpeg'
import Erfan from '../Assets/Erfan.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1em 0em',
    backgroundColor: 'white'
  },
  root2: {
    flexGrow: 1,
    padding: '0 8em',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary, 
  },
  title:{
    color: 'black', 
    fontFamily: 'Ubuntu', 
    fontWeight: 400, 
    textAlign: 'center', 
    paddingBottom: '1em',
    paddingTop: '1em'
  },
  cardImg:{
    height: '50px', 
    width: 'auto', 
    flexGrow: 1, 
    borderRadius: '50%',
  },
  cardNumber:{
    color: 'grey', 
    fontFamily: 'Ubuntu', 
    fontWeight: 300, 
    textAlign: 'center', 
    fontSize: '12px',
  },
  cardTime:{
    color: 'grey', 
    fontFamily: 'Ubuntu', 
    fontWeight: 300, 
    textAlign: 'center', 
    fontSize: '15px',
  },
  cardTitle:{
    color: 'black', 
    fontFamily: 'Ubuntu', 
    fontWeight: 500, 
    textAlign: 'center', 
    fontSize: '15px',
  },
  cardText:{
    color: 'black', 
    fontFamily: 'Ubuntu', 
    fontWeight: 300, 
    textAlign: 'center', 
    fontSize: '15px',
  },
  resha: {
    maxWidth: 345,
  },
  cityname: {
      fontFamily: 'nassim',
      textAlign: 'center!important'
  }
}));
//
export default function AutoGrid() {
  const classes = useStyles();
  return (
    <div style={{ padding: '1em', paddingBottom: '4em'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Grid spacing={4} container xs={12} style={{display: 'flex', justifyContent: 'center', }}>
        <Grid item xs={12} sm={4} md={2}>
            <Card className={classes.resha}>
        
                    <CardMedia
                    component="img"
                    alt="Aks Ketab"
                    height= "400vh"
                    width= "auto"
                    image= {Ayeen}
                    title="Ayeen"
                    />
  
            </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
            <Card className={classes.resha}>


                    <CardMedia
                    component="img"
                    alt="Aks Ketab"
                    height= "400vh"
                    width= "auto"
                    image= {Daramadi}
                    title="Daramadi"
                    />


            </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
            <Card className={classes.resha}>

                    <CardMedia
                    component="img"
                    alt="Aks Ketab"
                    height= "400vh"
                    width= "auto"
                    image= {Didgah}
                    title="Didgah"
                    />

            </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
            <Card className={classes.resha}>

                    <CardMedia
                    component="img"
                    alt="Aks Ketab"
                    height= "400vh"
                    width= "auto"
                    image= {Erfan}
                    title="Erfan"
                    />

            </Card>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}