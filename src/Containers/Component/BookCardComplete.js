import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

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
    marginBottom: '5vh',
    backgroundColor: '#445e79',
  },
  cityname: {
      fontFamily: 'nassim',
      textAlign: 'center!important',
      fontSize: '1vw'
  },
  button: {
    fontFamily: 'titr',
    textAlign: 'center!important',
    color: '#005691!important',
    fontSize: '1em'
  },
  buttonenglish: {
    fontFamily: 'vazir',
    textAlign: 'center!important',
    color: '#005691!important', 
    fontSize: '1em',
    fontWeight: 1000
  }
}));
//
export default function AutoGrid() {
  const classes = useStyles();
  const [bookGallery, setBookGallery] = useState([]);
  useEffect(() => {
      fetchBookGalleryData()
  }, []);

  const fetchBookGalleryData = () =>{
      fetch('/api/book', {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
      .then(response => response.json())
      .then(data =>{
          setBookGallery(data)
      } );
  } 
const getBookGalleryImages = () => {
  return(
    bookGallery.map((data, index) => (
            <Grid  style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={6} md={5} lg={5}>
              <div style={{margin: '0 3vw'}}>
                <Card elevation={5} className={classes.resha}>
                  <CardActionArea>
                      <CardMedia
                      component="img"
                      alt="Bidel"
                      image= {data.pr_image}
                      title="BedilVol1"
                      />
                    <CardContent style={{display:'flex', justifyContent: 'center'}}>
                      <Button size="medium" variant="contained" style={{backgroundColor: 'white'}} href={data.link}>
                        <Typography  className={classes.button}>
                           {data.edition}
                      </Typography> 
                    </Button>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div>
                <Card elevation={5} className={classes.resha}>
                  <CardActionArea>
                      <CardMedia
                      component="img"
                      alt="Bidel"
                      image= {data.en_image}
                      title="BedilVol12"
                      />
                      <CardContent style={{display:'flex', justifyContent: 'center'}}>
                        <Button size="medium" variant="contained" style={{backgroundColor: 'white'}} href={data.link}>
                            <Typography  className={classes.buttonenglish}  variant="h5" component="h5">
                           {data.en_edition}
                            </Typography> 
                        </Button>
                      </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
          ))
        )
}
return (
  <div style={{ padding: '1em'}}>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Grid spacing={4} container xs={12} style={{display: 'flex', justifyContent: 'center' }}>
        {getBookGalleryImages()}           
      </Grid>
    </div>   
  </div>
);
}