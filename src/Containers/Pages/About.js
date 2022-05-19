import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Box} from '@material-ui/core';
import './About.css';
import ElyasCard from '../Component/ElyasCard';
import { useState, useEffect } from 'react';
import DOMPurify from "dompurify";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0.2em 2vw',
    display: 'inline',
    overflow: 'hidden'
  },
  h1:{
    fontFamily: 'titr',
    padding: '0.5em 0 1em 0',
    textAlign: 'center',
    fontSize: '3em',
    color: '#fff'
  },
  para: {
    fontFamily: 'vazir',
    lineHeight: '2.4em',
    textAlign: 'justify !important',
    justifyContent: 'right',
    fontSize: '16px',
    fontWeight: 300,
    marginBottom: '1.5em',
  },
  image: {
    height: '25vh', 
    width: 'auto%', 
    flexGrow: 1,
    textAlign: 'center'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [texts, setTexts] = useState([]);
  const fetchData =() => {
      fetch('http://127.0.0.1:8000/api/about', {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
      .then(response => response.json())
      .then(data =>{
          console.log(data)
          setTexts(data)
      } );
  
  }
  useEffect(() => {
      // GET request using fetch inside useEffect React hook
      fetchData()
  }, []);
  const getAboutText = () => {
    return(
        <div>
            {texts.map((data, index) => (
              <div>
                <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.body, {FORCE_BODY: true})}}  className={classes.para} />
              </div>
            ))}
        </div>
    )
  } 
  return (
    <div style={{overflow: 'hidden', background: '#fafafa !important'}}>
      <div className='header'>
          <p className={classes.h1}>درباره‌ی ما</p>
      </div>
      <div className='header2'>
        <div class="custom-shape-divider-top-1651038926">
          
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
          </svg>

        </div>

      </div>
      <div style={{margin: '0'}}>
          <Grid className={classes.gridSpace} container spacing={1}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
            <Box                
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
              >
              {getAboutText()}
            </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box                
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
              >
                <ElyasCard/>
              </Box>
            </Grid>
          </Grid>
      </div>
    </div>
   );    
}



