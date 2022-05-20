import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
    maxWidth: '45vw',
    height: '45vh'
  },
  cityname: {
      fontFamily: 'nassim',
      textAlign: 'center!important',
      fontSize: '1.2em'
  }
}));
//
export default function AutoGrid() {
  const classes = useStyles();
  const [books, setBooks] = useState([]);
   
  useEffect(() => {
      // GET request using fetch inside useEffect React hook
      fetchBooksData()
  }, []);

  const fetchBooksData = () =>{
      fetch('/api/author-gallery', {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
      .then(response => response.json())
      .then(data =>{
          setBooks(data)
      } );
  } 
  const getBooksData = () => {
    return(
            books.map((data, index) => (

                  <Grid item xs={12} sm={6} md={5} lg={5}>
                    <Card>
                      <CardMedia
                      component="img"
                      height= "400vh"
                      image= {data.image}
                      key={index}
                      />
                      <CardContent>
                      <Typography  className={classes.cityname}  key={index} gutterBottom variant="h5" component="h5">
                        {data.title}
                    </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
            ))
    )
}
  return (
    <div style={{ padding: '1em', paddingBottom: '4em'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Grid spacing={4} container xs={12} style={{display: 'flex', justifyContent: 'center', }}>
          {getBooksData()}
        </Grid>
      </div>
    </div> 
  );
}