import React , { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Drawer } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/CloseRounded';
import Divider from '@material-ui/core/Divider';
import MenuIcon from "@material-ui/icons/MenuOpenRounded";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import './Header.css';
import logos from './logo21.png';
import logos1 from './logo3.png';
import Button from '@mui/material/Button';

//Styles for components
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontFamily: 'titr',
      textTransform: 'unset!important',
    },
  },
  header: {
    backgroundColor: "#fff",
    "@media (max-width: 900px)": {
    paddingLeft: 0,
    },
  },
  drawerContainer: {
    paddingLeft: "15px",
  },
  paper: {
    width: '100vw'
  },
  menuItem: {
    marginRight: 'auto',
    padding: 0,
    textTransform: 'unset!important',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: "vazir",
    fontWeight: 400,
    fontSize: 13,
    paddingBottom: '14px'
  },
  menuItem1: {
    marginRight: 'auto',
    padding: 0,
    textTransform: 'unset!important',
    display: 'flex',
    justifyContent: 'flex-start',
    fontFamily: "titr",
    fontWeight: 400,
    fontSize: 16,
    paddingBottom: '14px'
  },
  subtitles: {
    fontFamily: "titr",
    fontWeight: 300,
    fontSize: '12px'
  }
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function ElevateAppBar(props) {
  const { header,  drawerContainer, paper,  menuItem}  = useStyles();
    const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })
const { mobileView, drawerOpen } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1200
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

 //Desktop display
  const displayDesktop = () => {
    return (
    <Toolbar style={{background: '#005691'}}>
    <div>
      <a href="/"><img src={logos1} alt="logo" height='50px' width = 'auto' style={{flex: 1}}/>&nbsp;</a>     
    </div>
{/* menu tabs */}
    <div className='titr' style={{paddingRight: '3vw'}}>
        <div className="dropdown">
            <Button style={{fontSize: '19px', marginRight: '15px'}} href="/Books" className="dropbtn">???????????????</Button>
                <div className="dropdown-content">
                        <a className='vazir' href="/Ensan_shinakhti_vol_one">????????????????????????? ???????? ???????? ??????</a>   
                        <a className='vazir' href="/Ensan_shinakhti_vol_two">????????????????????????? ???????? ???????? ??????</a>
                        <a className='vazir' href="/Ensan_shinakhti_vol_three">????????????????????????? ???????? ???????? ??????</a>
                        <a className='vazir' href="/Ensan_shinakhti_vol_four">????????????????????????? ???????? ???????? ??????????</a> 
                </div>
        </div>
        <div className="dropdown">
            <Button style={{fontSize: '19px', marginRight: '15px'}} href="/Author" className="dropbtn">??????????????</Button>
                <div className="dropdown-content">
                        <a className='vazir' href="/Author">???????? ?????? ?????????????? ????????</a>                           
                </div>
        </div>
        <div className="dropdown">
            <Button href="/buy" style={{fontSize: '19px', marginRight: '15px'}} className="dropbtn">???????? ????????</Button>
            <div className="dropdown-content">
                <a className='vazir' href="/BuyHere">???????? ???????? ???? ???????????????? ??????????</a>
                <a className='vazir' href="/Amazon">???????? ???????? ???? ????????????</a>
                <a className='vazir' href="https://paypal.me/ensanpublishers">???????? ???????? ???? ?????????????</a>
            </div>
        </div>
        <div className="dropdown">
            <Button  style={{fontSize: '19px', marginRight: '15px'}} href="/AboutUs" className="dropbtn"> ???????????? ????????????????</Button>
        </div>
        <div className="dropdown">
            <Button style={{fontSize: '19px', marginRight: '15px'}} href="/ContactUs" className="dropbtn">???????? ???? ????????????????</Button>
        </div>
    </div>
    </Toolbar>
    );
    };
  //Mobile display 
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    
    
      return (
        <div>
        <Toolbar style={{background: '#005691'}}>
          <IconButton
            {...{
              edge: "start",
              color: "default",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon style={{color: '#fff'}}/>
          </IconButton>
        {/* Drawer Design */}
          <Drawer 
                {...{
                  anchor: "left",
                  open: drawerOpen,
                  onClose: handleDrawerClose,
                  classes: {paper},
                }} 
              >
              <div style={{display: 'flex'}}>
              <div>
                     
              </div>
              <div>
                <a href="/"><img src={logos} alt="logo" height='50' width = 'auto' style={{margin: '0.5em'}}/>&nbsp;</a>
              </div>
              <IconButton style={{marginRight: 'auto'}}
                    {...{
                      edge: "start",
                      color: "default",
                      "aria-label": "close",
                      "aria-haspopup": "true",
                      onClick: handleDrawerClose,
                    }}>
                  <CloseIcon style={{color: '#023B59'}}/>
              </IconButton>
              </div>
              <Divider variant="middle" />
              <Button href="/Books" style={{fontFamily: 'titr', color: '#023B59', padding: '5px 15px', marginLeft: 'auto', fontSize: '1.2em'}}>???????????????</Button>
                <div className={drawerContainer}>
                  <a className={menuItem} href="/Ensan_shinakhti_vol_one">????????????????????????? ???????? ???????? ??????<ChevronLeftIcon style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                  <a className={menuItem} href="/Ensan_shinakhti_vol_two">????????????????????????? ???????? ???????? ??????<ChevronLeftIcon style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                  <a className={menuItem} href="/Ensan_shinakhti_vol_three">????????????????????????? ???????? ???????? ??????<ChevronLeftIcon  style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                  <a className={menuItem} href="/Ensan_shinakhti_vol_four">	????????????????????????? ???????? ???????? ??????????<ChevronLeftIcon style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                </div> 
              <Divider variant="middle" />  
              <Button href="/Author" style={{fontFamily: 'titr', color: '#023B59', padding: '5px 15px', marginLeft: 'auto', fontSize: '1.2em'}}>??????????????</Button>
                <div className={drawerContainer}>
                  <a className={menuItem} href="/Author">???????? ?????? ?????????????? ????????<ChevronLeftIcon  style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                </div>
              <Divider variant="middle" />  
              <Button href="/Buy" style={{fontFamily: 'titr', color: '#023B59', padding: '5px 15px', marginLeft: 'auto', fontSize: '1.2em'}}>???????? ????????</Button>
                <div className={drawerContainer}>
                  <a className={menuItem} href="/BuyHere">???????? ???????? ???? ???????????????? ??????????<ChevronLeftIcon  style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                  <a className={menuItem} href="/Amazon">???????? ???????? ???? ????????????<ChevronLeftIcon  style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                  <a className={menuItem} href="https://paypal.me/ensanpublishers">	???????? ???????? ???? ?????????????<ChevronLeftIcon  style={{marginRight: '8px', color: '#023B59'}} fontSize="small" color="disabled"/></a>
                </div>
              <Divider variant="middle" /> 
                <a style={{fontFamily: 'titr', color: '#023B59', padding: '5px 15px', marginLeft: 'auto'}} href="/AboutUs">
                  <Typography style={{fontFamily: 'titr', color: '#023B59', marginLeft: 'auto'}}> ???????????? ????????????????</Typography>
                </a>
                <Divider variant="middle" /> 
                <a style={{fontFamily: 'titr', color: '#023B59', padding: '5px 15px', marginLeft: 'auto'}} href="/ContactUs">
                  <Typography style={{fontFamily: 'titr', color: '#023B59', marginLeft: 'auto'}}>???????? ???? ????????????????</Typography>
                </a>
                <Divider variant="middle" /> 
                <Typography style={{fontFamily: 'nassim', color: '#023B59', padding: '5px 15px', marginLeft: 'auto'}}>     ???????? ???????? ?????? ??????????????? ?????????? ??????????????????????? ?????????? ??????.</Typography>
          </Drawer>
              <a href="/"><img src={logos1} alt="logo" height='50vh' width = 'auto' /></a> &nbsp;
        </Toolbar>
        </div>
      );
    };
    return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
