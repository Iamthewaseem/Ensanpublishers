import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ContactCard from '../Component/ContactCard';
import FlipImage from '../Component/FlipImage'; 
import { Box } from '@material-ui/core';
import oneside from '../Assets/BedilVol2.jpg';
import twoside from '../Assets/BedilVol22.jpg';
// eslint-disable-next-line

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0.2em 1em',
    background: '#fff',
    overflow: 'hidden'
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
    fontSize: '1.8em',
    fontWeight: 300
  },
  header1:{
    fontFamily: 'nassim',
    fontSize: '2em',
    fontWeight: 1000,
    padding: '2.5em 0'
},
paragraph2: {
  fontFamily: 'vazir',
  fontSize: '0.8em',
  fontWeight: 500,
  lineHeight: '2em',
  textAlign: 'center'
},
gridSpace:{
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.h1}>خریداری مجلد دوم انسان‌شناختی بیدل</h1>
      <Grid className={classes.gridSpace} container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="2vh 0"
              >
                <img src={oneside} alt="kawish" height="auto" width="390vw" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="2vh 0"
              >
                <img src={twoside} alt="kawish" height="auto" width="390vw" />
              </Box>
            </Grid>
          </Grid>
      <p className={classes.para}>مشتری گرامی! برای خرید مجلد دوم ”انسان‌شناختی بیدل“ فورم زیر را خانه‌پری نمایید و یا به‌‌آدرس ایمیل و یا شماره تلفن انتشارات انسان در تماس شوید.</p>
      <div className={classes.root}>
        <Paper style={{backgroundColor: '#F9F7F7', margin: '0 2vw', padding: '2em'}} elevation={12} container>
          <Grid className={classes.gridSpace} container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <ContactCard/>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
   );    
}