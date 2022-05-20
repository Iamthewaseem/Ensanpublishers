import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import './Landing.css';
import FlipImage from '../Component/FlipImage';
import { makeStyles } from '@material-ui/core/styles';
import Buy from '../Component/BuyButton';
import BookCard from '../Component/BookCard';
import BookGallery3 from '../Component/BookCardGallery3';
import BuyNew from '../Component/BuyButtonNewTab';
import { useState, useEffect } from 'react';
import DOMPurify from "dompurify";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    paper: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    para: {
        fontFamily: 'vazir',
        fontSize: '1em !important',
        color: 'green',
        lineHeight: '3em'
    }
}));

const LandingPage = () => {
    const classes = useStyles();
    const [texts, setTexts] = useState([]);
    const [book, setBook] = useState([]);
    const [bio, setBio] = useState([]);
    const [elyas, setElyas] = useState([]);
    const fetchData = () => {
        fetch('/api/welcome', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setTexts(data)
            });
    }
    const fetchBookData = () => {
        fetch('/api/book/get-last', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setBook(data)
            });
    }
    const fetchAuthorBio = () => {
        fetch('/api/author', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setBio(data)
            });
    }
    const fetchAboutBio = () => {
        fetch('/api/about', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setElyas(data)
            });
    }
    useEffect(() => {
        fetchData()
        fetchBookData()
        fetchAuthorBio()
        fetchAboutBio()
    }, []);
    const getWelcomeText = () => {
        return (
            <div>
                {texts.map((data, index) => (
                    <div className='backgroundnawishta'>
                        <p className='title'>
                            {data.title}
                        </p>
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.body, { FORCE_BODY: true }) }} key={index}  className='para' />
                    </div>
                ))}
            </div>
        )
    }
    const getBookText = () => {
        return (
            <Grid container spacing={1} style={{ marginBottom: '4vh' }}>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Box className='center'>
                        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(book.body, { FORCE_BODY: true }) }}  className='para2' />
                        <br />
                        <br />
                        <div style={{ marginRight: '5em', lineHeight: '3em' }}>
                            <Buy link="/Volume4" text="خرید از انتشارات انسان" type="contained" />
                            <br />
                            <BuyNew link="https://www.amazon.com/dp/0578357828?ref=myi_title_dp" text="خرید از آمازون" type="contained" />
                            <br />
                            <BuyNew link="https://www.paypal.com/paypalme/ensanpublishers" text="خرید از پی‌پال" type="contained" /></div>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        margin="25px 0"
                    >
                        <FlipImage aks={book.pr_image} text={book.title} />
                    </Box>
                </Grid>
            </Grid>
        )
    }

    return (
        <div className={classes.root}>
            <div container className='backgroundaks'>
                {getWelcomeText()}
            </div>
            <div>
                {getBookText()}
            </div>
            <div className='filler'>
                <p className='title2'>
                    مجلد‌های موجود انسان‌شناختی
                </p>
            <BookCard />
            </div>
            <div>
                <div className="custom-shape-divider-top-1651252755">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Box className='para3'>
                            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bio.title, { FORCE_BODY: true }) }} className='title4' style={{ textAlign: 'center' }} />
                                <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bio.details, { FORCE_BODY: true }) }} className='para3' style={{ textAlign: 'justify' }} />
                                <span className='para3' style={{textAlign: 'left'}}>
                                    <a  className='para3' 
                                        style={{ 
                                            textDecoration: 'none', 
                                            textAlign: 'right', 
                                            fontSize: '0.8em', 
                                            marginRight: '2vw', 
                                            fontWeight: '1000' 
                                        }} 
                                        href="/Author">بیشتر بخوانید...</a>
                                </span>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            paddingBottom="2vh"
                        >
                            <img className="image1" src={bio.image_port} alt="ostad kawish" height="250px" width="auto" />
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <div>
                {elyas.map((data, index) => (
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                paddingBottom="2vh"
                            >
                                <img className="image" src={data.image_port} alt={data.image_ports} key={index} height="250px" width="auto" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <Box className='para3'>
                                <p className='title4'>
                                    انتشارات انسان
                                </p>
                                <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.details, { FORCE_BODY: true }) }} className='para3' key={index}  style={{ textAlign: 'justify' }} />
                                <span className='para3' style={{textAlign: 'left'}}>
                                    <a  className='para3' 
                                        style={{ 
                                            textDecoration: 'none', 
                                            textAlign: 'right', 
                                            fontSize: '0.8em', 
                                            marginRight: '2vw', 
                                            fontWeight: '1000' 
                                        }} 
                                        href="/AboutUs">بیشتر بخوانید...
                                    </a>
                                </span>
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </div>
            <div className='filler2'>
                <div className="custom-shape-divider-top-1651260360">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className='filler3'>
                <p className='title5'>
                    گالری کتاب‌ها
                </p>
                <BookGallery3 />
            </div>
        </div>
    )
};

export default LandingPage;