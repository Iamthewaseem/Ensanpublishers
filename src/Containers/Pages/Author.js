import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Author.css';
import Kawish from '../Component/KawishCard';
import BookCard from '../Component/Books';
import { useState, useEffect } from 'react';
import DOMPurify from "dompurify";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: '0.2em 20vw'
    },
    header1:{
      fontFamily: 'vazir',
      textAlign: 'center',
      fontSize: '2rem'
    },
    paragraph: {
      fontFamily: 'vazir',
      lineHeight: '2.4em',
      textAlign: 'justify',
      fontSize: '16px',
      fontWeight: 300,
      padding: '0 3vw',
      direction: 'ltr',
      marginBottom: '2em',
    },
    para: {
        fontFamily: 'vazir',
        lineHeight: '2.4em',
        textAlign: 'justify',
        fontSize: '16px',
        fontWeight: 300,
        padding: '0 5vw',
        direction: 'ltr',
      },
  }));

const LandingPage = () => {
    const classes = useStyles();
    const [texts, setTexts] = useState([]);
    
    const fetchData =() => {
        fetch('/api/author', {
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
    const [books, setBooks] = useState([]);
    const fetchPublishData =() => {
        fetch('/api/author-publishment', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            setBooks(data)
        } );
    }
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetchPublishData()
        fetchData()

    }, []);
    
    const getAuthorText = () => {
        return(
            <div style={{background: 'white!important'}}>
                <div> 
                    <div style={{background: 'white'}}>
                        <div class="custom-shape-divider-top-1651047448">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='header2' style={{background: 'white'}}>
                        <h1 style={{background: 'white'}} className={classes.header1}>{texts.title}</h1>  
                    </div>
                    <Box display="flex" container flexWrap="wrap" justifyContent="center" spacing={3}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                paddingBottom="2vh"
                            >
                                <Kawish/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <div>
                            <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(texts.body, {FORCE_BODY: true})}} className={classes.paragraph} />
                            </div>
                            <div>
                                <BookCard/>
                            </div>
                            {books.map((data, index) => (
                                <div>
                                    <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.body, {FORCE_BODY: true})}} className={classes.paragraph} />
                                </div>
                            ))}
                        </Grid>
                    </Box>
                </div> 
            </div>
        )
    }
    return(
        <div>
        {getAuthorText()};
        </div>
     
    )
};

export default LandingPage;
