import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Amazon.css';
import BuyBookCard from '../Component/BuyBookCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white!important',
    overflow: 'hidden'
  },
  h1:{
    fontFamily: 'titr',
    margin: '0 0 0.8vh 0',
    textAlign: 'center',
    fontSize: '3em',
    color: '#005691'
  },
  para: {
    fontFamily: 'nassim',
    lineHeight: '2.4em',
    textAlign: 'justify',
    fontSize: '1.5rem',
    fontWeight: 300
  },
  paratop: {
    fontFamily: 'vazir',
    lineHeight: '2.4em',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 300,
    paddingBottom: '2rem'
  },
  image: {
    height: '25vh', 
    width: 'auto%', 
    flexGrow: 1,
    textAlign: 'center'
  },
  paper:{
      justifyContent: 'space-around',
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    {/* <div className='header'>
        
    </div> */}
        <div className='header2'>
            <div class="custom-shape-divider-top-1651238631">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
                </svg>
            </div>
            <p className={classes.h1}>خریداری کتاب از انتشارات انسان</p>
        </div>
        <Grid  container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <BuyBookCard/>  
            </Grid>
        </Grid>
    </div>
   );    
}



