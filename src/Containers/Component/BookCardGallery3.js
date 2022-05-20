import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
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
  },
  cityname: {
      fontFamily: 'nassim',
      textAlign: 'center!important',
      fontSize: '1.4vw'
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
      fetch('/api/book-gallery', {
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
          
  const getBookGalleryData = () => {
    return(
      bookGallery.map((data, index) => (
              <Grid  style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={6} md={3} lg={3}>
                <Card elevation={5} className={classes.resha}>
                      <CardMedia
                      component="img"
                      alt={data.title}
                      image= {data.image}
                      title="Ayeen"
                      />
                </Card>
              </Grid>
            ))
          )
}
  return (
    <div style={{ padding: '1em'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Grid spacing={4} container xs={12} style={{display: 'flex', justifyContent: 'center' }}>
          {getBookGalleryData()}           
        </Grid>
      </div>   
    </div>
  );
}