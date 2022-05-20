import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BuyButton from './BuyButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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
    maxWidth: 450,
    marginBottom: '5vh',
    backgroundColor: '#445e79'
  },
  cityname: {
      fontFamily: 'nassim',
      textAlign: 'center!important',
      fontSize: '1.4vw'
  },
  button: {
    fontFamily: 'titr',
    textAlign: 'center!important',
    color: '#445e79!important',
    fontSize: '1em'
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
        fetch('/api/book', {
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
                   <Grid  style={{display: 'flex', justifyContent: 'center', }} item xs={12} sm={6} md={6} lg={2}>
                      <Card elevation={15} className={classes.resha}>
                      <CardActionArea>
                          <CardMedia
                          component="img"
                          alt="Bidel"
                          image= {data.pr_image}
                          title={data.title}
                          />
                          <CardContent style={{display:'flex', justifyContent: 'center'}}>
                          <BuyButton text={data.edition} link={data.amazone_link}/>
                          </CardContent>
                      </CardActionArea>
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