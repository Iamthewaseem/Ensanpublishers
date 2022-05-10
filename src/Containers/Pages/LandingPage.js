import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import './Landing.css';
import FlipImage from '../Component/FlipImage';
import { makeStyles } from '@material-ui/core/styles';
import Buy from '../Component/BuyButton';
import BookCard from '../Component/BookCard';
import kawish from '../Assets/ostad1.jpg';
import kawish1 from '../Assets/Elyas1.jpg';
import BookGallery3 from '../Component/BookCardGallery3';
import BookGallery2 from '../Component/BookCardGallery2';
import BuyNew from '../Component/BuyButtonNewTab';
import { useState, useEffect } from 'react';
import DOMPurify from "dompurify";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden'
    },
    paper:{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    para:{
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
    const fetchData =() => {
        fetch('/api/welcome', {
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
        fetchBookData()
    }, []);

    const fetchBookData = () =>{
        fetch('/api/book/get-last', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            setBook(data)
        } );
    } 
            
    
    
    const getWelcomeText = () => {
        return(
            <div>
                {texts.map((data, index) => (
                    <div  className='backgroundnawishta'>
                        <p  className='title'>
                            {data.title}
                        </p>
                         <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.body, {FORCE_BODY: true})}} className='para' />
                    </div>
                ))}
            </div>
        )
    }

    const getBookText = () => {
        return (
            <Grid container spacing={1} style={{marginBottom: '4vh'}}>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Box className='center'>
                    <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(book.body, {FORCE_BODY: true})}} className='para2'/>
                        <br/>
                        <br/>
                        <div style={{marginRight: '5em', lineHeight: '3em'}}>
                        <Buy link="/Volume4" text="خرید از انتشارات انسان" type="contained"/>
                        <br/>
                        <BuyNew link="https://www.amazon.com/dp/0578357828?ref=myi_title_dp" text="خرید از آمازون" type="contained"/>
                        <br/>
                        <BuyNew link="https://www.paypal.com/paypalme/ensanpublishers" text="خرید از پی‌پال" type="contained"/></div>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    margin= "25px 0"
                >
                
                    {/* <img src={book.en_image}/> */}
                    <FlipImage aks={book.pr_image} text={book.title}/>
                </Box>
            </Grid>
            
        </Grid>

        )
    }
    return(
            <div className={classes.root}>
                <div container className='backgroundaks'>
                   {getWelcomeText()}
                </div>
                <div>
                   {getBookText()}
                </div>
                <div className='filler'>
                    <p  className='title2'>
                     مجلد‌های موجود انسان‌شناختی
                    </p>
                    {/* <BookGallery1/> */}
                    <BookCard/>
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
                            <Box className='center'>
                                <p  className='title4'>
                                زندگی و آثار محترم استاد دکتر سید نورالحق کاوش  
                                </p>
                                <p className='para3'>
                                    سید نورالحق کاوش در چهارم جدی 1330 خورشیدی در قریۀ تلابۀ سفلی ولسوالی انجیل
                                    هرات در خانوادۀ فرهنگی دانش‌ورزیده‌ای دیده به‌جهان گشود. مادر-اش حلیمه
                                    فرزند سید یعقوب بانوی فرهنگ‌پرور و مشتاق تربیت سالم فرزندان میهن و پدر-اش
                                    مولوی میرعبدالحق مدرس، استاد مدرسۀ جامع هرات و یکی از برازنده‌ترین کوشندگان
                                    به‌رسمیت دولتی‌درآوردن مدرسه جامع هرات در چهارچوب مؤسسات رسمی آموزش‌های
                                    عالی وزارت معارف وقت افغانستان و فرزانۀ بی‌نظیر متبحّر در رشته‌های فلسفه،
                                    حکمت، کلام اسلامی (عقاید اسلامی)، منطق و علوم بلاغت ادب (معانی، بیان و
                                    بدیع) بود که حدود سی‌سال از عمر گران‌بهای خود را وقف تدریس فرزندان وطن در
                                    مدرسۀ یادشده کرد.
                                </p>
                                <br/>
                                <p className='para3'>
                                    سید نورالحق کاوش به عنوان فرزند ارشد این فامیل دانشی-فرهنگی...<a style={{textDecoration: 'underline'}} href="/author">ادامه</a>
                                </p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                paddingBottom="2vh"
                            >
                                <img className="image1" src={kawish} alt="ostad kawish" height="250px" width="auto" />
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                paddingBottom="2vh"
                            >
                                <img className="image" src={kawish1} alt="ostad kawish" height="250px" width="auto" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <Box className='center'>
                                <p  className='title4'>
                                انتشارات انسان
                                </p>
                                <p className='para3'>
                                    ”انتشارات انسان“ یک نهاد خصوصی چاپ، نشر و توزیع آثار بس ارزنده در پاره‌ای
                                    از رشته‌های علوم انسانی است که در حال حاضر متعهد چاپ، نشر و توزیع آثار پدر
                                    و استاد گرامی-ام استاد دکتر سید نورالحق کاوش است و با فراهم‌آمدن آینده‌های
                                    مساعد، به‌چاپ، نشر و توزیع آثار بزرگ‌اندیش‌مند‌ان مستقل دیگر رشته‌های علوم
                                    انسانی نیز مبادرت خواهد ورزید.
                                </p><br/>
                                <p className='para3'>
                                    باتوجه به‌این حقیقت تلخ تاریخی در گذشته‌های دور که معمولا متولیان چاپ و نشر
                                    آثار متفکران علوم انسانی را مؤسسات رسمی-دولتی پرغرض‌و‌مرض سیاسی-اقتصادی...
                                    <a style={{textDecoration: 'underline'}} href="/Aboutus">ادامه</a>
                                </p>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <div className='filler2'>
                <div className="custom-shape-divider-top-1651260360">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
    </svg>
</div>
                </div>
                <div className='filler3'>
                    <p  className='title5'>
                            گالری کتاب‌ها
                    </p>
                    <BookGallery3/>
                    <BookGallery2/>
                </div>
            </div>                 
    )
};

export default LandingPage;