import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@material-ui/core/styles';
import LocationCityTwoToneIcon from '@mui/icons-material/LocationCityTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import { Box } from '@material-ui/core';
import ContactForm from './ContactForm';
// eslint-disable-next-line
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    divider: {
        fontFamily: 'titr',
        fontSize: '2.2em',
        color: '#112D4E',
    },
    header1:{
        fontFamily: 'nassim',
        fontSize: '2em',
        fontWeight: 1000,
        padding: '0.2em 0',
    },
    paragraph: {
        fontFamily: 'vazir',
        fontSize: '1.6em',
        fontWeight: 500,
        lineHeight: '2em',
        color: '#3F72AF'
    },
    paragraph1: {
        fontFamily: 'vazir',
        fontSize: '1.6em',
        fontWeight: 500,
        lineHeight: '2em',
        color: '#3F72AF',
        direction: 'ltr!important',
        textAlign: 'left',
    },
    paragraph2: {
        fontFamily: 'vazir',
        fontSize: '1.2em',
        fontWeight: 500,
        lineHeight: '2em',
        textAlign: 'left'
    },
    footercontainer2:{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        fontfamily: 'Vazir',
        fontSize: '1.2em',
    },
    wrapIcon: {
      alignItems: "center",
      display: "flex",
      fontFamily: 'nassim',
      fontSize: '2em',
      fontWeight: 1000,
      lineHeight: '2em',
      color: '#112D4E',
    },
  }));

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },

}));

export default function VerticalDividerText() {
  const classes = useStyles(); 
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetchContactInfo()
  }, []);

  const fetchContactInfo = () =>{
      fetch('/api/contact-info', {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
      .then(response => response.json())
      .then(data =>{
        setInfo(data)
      } );
  } 
  const getInfoText = () => {
    return (
        <div>
            {info.map((data, index) => (
                <div>
                  <Grid container>
                    <Grid item xs>
                      <ContactForm/>
                    </Grid>
                    <Divider className={classes.divider} orientation="vertical" flexItem>
                      انتشارات انسان
                    </Divider>
                    <Grid item xs >
                      <Box sx={{ textOverflow: 'ellipsis' }}>
                          <p className={classes.wrapIcon} >
                            <LocationCityTwoToneIcon style={{ fontSize: '1.4em'}}/> - 
                              آدرس
                          </p>
                          <p className={classes.paragraph}>
                         {data.address}
                          </p>
                          <p className={classes.wrapIcon}>
                          <CallTwoToneIcon style={{ fontSize: '1.4em'}}/> -
                          شماره تماس      
                          </p>
                          <a href="tel:781-209-2676">
                              <p className={classes.paragraph1}>
                              {data.phone}
                              </p> 
                          </a>
                          <p className={classes.wrapIcon}>
                            <EmailTwoToneIcon style={{ fontSize: '1.4em'}}/> -
                          پست الکترونیک      
                          </p>
                          <a href="mailto: info@ensanpublishers.com">
                              <p className={classes.paragraph}>
                              {data.email}
                              </p> 
                          </a>
                            <p className={classes.header1}>
                                 صفحات اجتماعی        
                              </p>
                              <p className={classes.paragraph}>
                              <a href={data.facebook} rel="noreferrer"  target="_blank"><FacebookIcon style={{color: '#4267B2', fontSize: '2.5em'}} /></a>&nbsp;
                              {/* <a href="https://www.Instgram.com"><InstagramIcon style={{color: 'crimson ', margin: '0 0.2em', fontSize: '2.5em'}}/></a>&nbsp; */}
                              <a href={data.twitter} target="_blank" rel="noreferrer" > <TwitterIcon style={{color: '#00acee ', fontSize: '2.5em'}}/></a>&nbsp;
                              <a href={data.linkedin} target="_blank" rel="noreferrer" ><LinkedInIcon style={{color: '#0e76a8 ',  fontSize: '2.5em'}}/></a>&nbsp;
                              </p> 
                        </Box>
                    </Grid>
                  </Grid>
                </div> 
            ))}
        </div>
    )
}
  return (
    getInfoText()
  );
}


