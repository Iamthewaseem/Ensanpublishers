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


// import Ayeen from '../Assets/AyeenZahidFront.jpeg';
// import bidel1 from '../Assets/Bidel1.jpg'
// import bidel2 from '../Assets/Bidel2.jpg'
// import bidel3 from '../Assets/Bidel3.JPG'
// import bidel4 from '../Assets/Bidel4.jpg'
// import Daramadi from '../Assets/Daramadi.jpg'
// import Didgah from '../Assets/Didgah.jpeg'
// import Erfan from '../Assets/Erfan.jpeg'
// import Majmo from '../Assets/Majmo.jpg' 
// import Manteq from '../Assets/Manteq.jpeg'
// import Nazaria from '../Assets/Nazaria.jpg'
// import Rohe from '../Assets/Rohe.jpeg';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';


// const BooksPhotos = [ 
//     {
//         Title: "Ayeen",
//         Picture: {Ayeen}
//     },
//     {
//         Title: "bidel1",
//         Picture: {bidel1}
//     },
//     {
//         Title: "bidel2",
//         Picture: {bidel2}
//     },
//     {
//         Title: "bidel3",
//         Picture: {bidel3}
//     },
//     {
//         Title: "bidel4",
//         Picture: {bidel4}
//     },
//     {
//         Title: "Daramadi",
//         Picture: {Daramadi}
//     },
//     {
//         Title: "Didgah",
//         Picture: {Didgah}
//     },
//     {
//         Title: "Erfan",
//         Picture: {Erfan}
//     },
//     {
//         Title: "Majmo",
//         Picture: {Majmo}
//     },
//     {
//         Title: "Manteq",
//         Picture: {Manteq}
//     },
//     {
//         Title: "Nazaria",
//         Picture: {Nazaria}
//     },
//     {
//         title: "Rohe",
//         picture: {Rohe}
//     },
// ]
<<<<<<< HEAD

=======
>>>>>>> parent of eb5aa31 (Few new changes)

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    paper: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
<<<<<<< HEAD
<<<<<<< HEAD
    },
    para: {
        fontFamily: 'vazir',
        fontSize: '1em !important',
        color: 'green',
        lineHeight: '3em'
=======
>>>>>>> parent of eb5aa31 (Few new changes)
=======
>>>>>>> parent of eb5aa31 (Few new changes)
    }
}));

const LandingPage = () => {
    const classes = useStyles();
<<<<<<< HEAD
<<<<<<< HEAD
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
                            <Buy link={book.web_link} text=" از انتشارات انسان" type="contained" />
                            <br />
                            <BuyNew  link={book.amazone_link} text="خرید از آمازون" type="contained" />
                            <br />
                            <BuyNew  link={book.paypal_link} text="خرید از پی‌پال" type="contained" /></div>
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
=======
=======
>>>>>>> parent of eb5aa31 (Few new changes)
    // const GetCovers = (props) => {
    //     return BooksPhotos.map(({ title, picture }) => {
    //         return (
    //                 <div style={{ padding: '1em', paddingBottom: '4em'}}>
    //                     <div style={{display: 'flex', justifyContent: 'center'}}>
    //                         <Grid spacing={4} container xs={12} style={{display: 'flex', justifyContent: 'center', }}>
    //                             <Grid item xs={12} sm={4} md={2}>
    //                                 <Card className={classes.resha}>
    //                                     <CardMedia
    //                                         component="img"
    //                                         alt="Contemplative Reptile"
    //                                         height= "400vh"
    //                                         width= "auto"
    //                                         image={picture}
    //                                         title={title}
    //                                     />
    //                                 </Card>
    //                             </Grid>
    //                         </Grid>
    //                     </div>
    //                 </div>
    //         )
    //     })
    //   };
    return(
            <div className={classes.root}>
                <div container className='backgroundaks'>
                    <div className='backgroundnawishta'>
                        <p  className='title'>
                           مژده
                        </p>
                        <p className='para'>
                            به‌مشتاقان پژوهش رشته‌های علوم ادبی و انسانی به‌ویژه
                            <br/>
                            انسان‌شناختی و فلسفۀ اخلاقِ توأم با نقدِ انگاره‌های تقلیدی
                            <br/>
                            و
                            <br/>
                            دوست‌داران دانش، بینش و روش بیدل فیلسوف‌شاعر انسان‌گرا و روشن‌اندیش
                            دری‌زبان هندی
                            <br/>
                            و علاقه‌مندان بیدل‌شناختی آکادمیک
                        </p>
                    </div>
<<<<<<< HEAD
>>>>>>> parent of eb5aa31 (Few new changes)
=======
>>>>>>> parent of eb5aa31 (Few new changes)
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
                                        href="/Author">ادامه...</a>
                                </span>
                        </Box>
                    </Grid>
<<<<<<< HEAD
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            paddingBottom="2vh"
                        >
                            <img className="image1" src={bio.image_port} alt="ostad kawish" height="250px" width="auto" />
                        </Box>
=======
                </div>
                <div className='filler'>
                    <p  className='title2'>
                     مجلد‌های موجود انسان‌شناختی
                    </p>
                    {/* <BookGallery1/> */}
                    <BookCard/>
                </div>
                <div>
                    <div class="custom-shape-divider-top-1651252755">
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
>>>>>>> parent of eb5aa31 (Few new changes)
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
                                        href="/AboutUs">ادامه...
                                    </a>
                                </span>
                            </Box>
                        </Grid>
                    </Grid>
<<<<<<< HEAD
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
=======
                </div>
                <div className='filler2'>
                <div class="custom-shape-divider-top-1651260360">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
                </div>
                <div className='filler3'>
                    <p  className='title5'>
                            گالری کتاب‌ها
                    </p>
                    {/* <GetCovers/> */}
                    <BookGallery3/>
                    <BookGallery2/>
                    {/* <BookGallery1/> */}
                </div>
            </div>                 
>>>>>>> parent of eb5aa31 (Few new changes)
    )
};

export default LandingPage;