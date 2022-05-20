import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Alert from '../Component/Alert';
import FlipImage from '../Component/FlipImage'; 
import { Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import DOMPurify from "dompurify";
import Hidden from '@material-ui/core/Hidden';
import BuyOptionMenu from '../Component/BuyOptionMenu3';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0.2em 1em',
    background: '#fff'
  },
  paper: {
    padding: theme.spacing(12),
    textAlign: 'justify',
  },
  h1:{
    fontFamily: 'titr',
    padding: '0.2em 2em',
    textAlign: 'center',
    fontSize: '2.6em',
    color: '#112D4E'
  },
  para: {
    fontFamily: 'vazir',
    lineHeight: '2.4em',
    textAlign: 'center',
    fontSize: '1.5em',
    fontWeight: 8500,
    marginTop: '1em'
  },
  para1: {
    fontFamily: 'vazir',
    lineHeight: '2.4em',
    textAlign: 'center',
    fontSize: '1.5em',
    fontWeight: 8500,
    marginTop: '1em',
    color: '#3F72AF'
  },
  gridSpace:{
    display: 'flex',
    justifyContent: 'center'
  }
}));


export default function CenteredGrid() {
  const classes = useStyles();
  const [volThree, setVolThree] = useState([]);
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
        setVolThree(data)
      } );
  } 
  const getEnsanVolThreeData = () => {
    return (
        <div>
          <div className={classes.root}>
          <Alert/>
          <div>
            <h1 className={classes.h1}>{volThree[2]?.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(volThree[2]?.body, { FORCE_BODY: true }) }} className={classes.para} />
          </div>
              <Grid className={classes.gridSpace} container spacing={2}>
              <Grid item xs={12} sm={12} md={8} lg={6}>
                  <p className={classes.para1}>
                  علاقه‌مندان به‌هدف دریافت مجلد اول انسان‌شناختی بیدل به‌گزینه‌های ذیل مراجعه بفرمایند.
                  </p>
                  <Box
                    display="inline"
                    justifyContent="center"
                    alignItems="center"
                    margin="4vh 0"
                  >
                    <BuyOptionMenu/>
                  </Box>
                </Grid>
                <Grid style={{display: 'flex', justifyContent: 'center' }} item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    margin="4vh 0"
                  >
                    <FlipImage aks={volThree[2]?.pr_image} text={volThree[2]?.title}/>                
                  </Box>
                </Grid>
                <Hidden mdDown>
                <Grid style={{display: 'flex', justifyContent: 'center' }} item xs={12} sm={12} md={3} lg={3}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    margin="4vh 0"
                  >
                    <FlipImage aks={volThree[2]?.en_image} text={volThree[2]?.en_title}/>              
                  </Box>
                </Grid>
                </Hidden>
              </Grid>
          </div>
        </div>
    )
}
  return (
    <div>
      {getEnsanVolThreeData()}
    </div>
   );    
}