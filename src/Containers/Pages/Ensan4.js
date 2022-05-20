import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import BuyOptionMenu from '../Component/BuyOptionMenu4';
import Hidden from '@material-ui/core/Hidden';
import FlipImage from '../Component/FlipImage'; 
import { useState, useEffect } from 'react';
import DOMPurify from "dompurify";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0.2em 1em',
    backgroundColor: 'white!important',
    overflow: 'hidden'
  },
  paper: {
    padding: theme.spacing(12),
    textAlign: 'justify',
    backgroundColor: 'white!important'
  },
  h1:{
    fontFamily: 'titr',
    padding: '0.2em 2em',
    textAlign: 'center',
    fontSize: '2.6em',
    color: '#112D4E',
    background: '#fff!important'
  },
  para: {
    fontFamily: 'vazir',
    lineHeight: '2.4em',
    textAlign: 'justify',
    fontSize: '1.5em',
    fontWeight: 500,
    marginTop: '1em',
    direction: 'ltr',
  },
  para2: {
    fontFamily: 'titr',
    lineHeight: '2.4em',
    textAlign: 'center',
    fontSize: '1.5em',
    fontWeight: 8500,
    marginTop: '1em',
    direction: 'ltr',
  },
  para1: {
    fontFamily: 'vazir',
    lineHeight: '2.4em',
    textAlign: 'center',
    fontSize: '1.5em',
    fontWeight: 8500,
    marginTop: '4em',
    color: '#3F72AF'
  },
  gridSpace:{
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [volFour, setVolFour] = useState([]);
  const [authorText, setAuthorText] = useState([]);

  useEffect(() => {
      fetchBookGalleryData();
      fetchAuthorText();
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
        setVolFour(data)
      } );
  } 
  const fetchAuthorText = () =>{
    fetch('/api/author-speech', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
    .then(response => response.json())
    .then(data =>{
      setAuthorText(data)
    } );
} 
const getAuthorText = () => {
  return (
          <div>
            {authorText.map((data, index) => (
              <div className={classes.root}>
                <h1 className={classes.h1}>انسان‌شناختی بیدل بخش پنجم اخلاق (بینش-روش خودسازی) بیدل پارۀ یکم</h1>
              <div >
              <div>
                <Grid className={classes.gridSpace} container spacing={2}>
                  <Grid item xs={12} sm={12} md={8} lg={6}>
                    <p className={classes.para1}>
                    علاقه‌مندان به‌هدف دریافت کتاب مذکور به‌گزینه‌های ذیل مراجعه بفرمایند.
                    </p>
                    <Box
                      display="inline"
                      justifyContent="center"
                      alignItems="center"
                      padding="0"
                    >
                      <BuyOptionMenu/>
                    </Box>
                  </Grid>  
                  <Grid style={{display: 'flex', justifyContent: 'center' }} item xs={12} sm={12} md={3} lg={3}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      padding="2vh 0"
                    >
                      <FlipImage aks={volFour[3]?.pr_image} text={volFour[3]?.title}/>          
                    </Box>
                  </Grid>
                  <Hidden mdDown>
                  <Grid style={{display: 'flex', justifyContent: 'center' }} item xs={12} sm={12} md={3} lg={3}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      padding="2vh 0"
                    >
                      <FlipImage aks={volFour[3]?.en_image} text={volFour[3]?.en_title}/>        
                    </Box>
                  </Grid>
                  </Hidden>
                </Grid>
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.body, { FORCE_BODY: true }) }} key={index}  className={classes.para} />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <img src={data.image} alt="kawish" height="auto" width="500vw" style={{borderRadius: '25px'}} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.details, { FORCE_BODY: true }) }} key={index}  className={classes.para} />
              </div>
            </div>
          </div> ))} 
        </div>
      )
}
  return (
    getAuthorText()
   );    
}