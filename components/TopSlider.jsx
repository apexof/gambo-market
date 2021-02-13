import React from 'react'
import Slider from 'react-slick'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const slides = [
    {
        id: 0,
        img: "/img/topSlider/slide-1.jpg",
        discount: "3",
        title: "Buy More & Save More",
        description: "Nuts & Snacks"
    },
    {
        id: 1,
        img: "/img/topSlider/slide-2.jpg",
        discount: "3",
        title: "Buy More & Save More",
        description: "Nuts & Snacks"
    },
    {
        id: 2,
        img: "/img/topSlider/slide-1.jpg",
        discount: "3",
        title: "Buy More & Save More",
        description: "Nuts & Snacks"
    },
    {
        id: 3,
        img: "/img/topSlider/slide-2.jpg",
        discount: "3",
        title: "Buy More & Save More",
        description: "Nuts & Snacks"
    },
    {
        id: 4,
        img: "/img/topSlider/slide-1.jpg",
        discount: "3",
        title: "Buy More & Save More",
        description: "Nuts & Snacks"
    },
    {
        id: 5,
        img: "/img/topSlider/slide-2.jpg",
        discount: "3",
        title: "Buy More & Save More",
        description: "Nuts & Snacks"
    },
]

const useStyles = makeStyles(theme => ({
    topSlider: {
        marginTop: 30,
        overflow: "hidden",
    },
    slideContent: {
        position: "absolute",
        top: "20px",
        left: "5px",
        background: "rgba(255,255,255,0.9)",
        padding: "15px 15px 11px",
        width: "220px",
        borderTopRightRadius: "50px",
        borderBottomRightRadius: "50px",
    },
    imgBorder: {
        background: "#fff",
        padding: "5px",
        borderRadius: "5px",
    },
    imgWrap: {
        position: "relative",
        margin: "0 15px",
    },
    list: {
        margin: "-10px -15px",
        width: "calc(118% + 30px)",
        transform: "translate(-9%)",
        "& .slick-track": {
            padding: "10px 0",
        },
    },
    btn: {
        position: "absolute",
        bottom: "20px",
        right: "20px",
    },
    discount: {
        fontSize: "12px",
        fontWeight: 600,
        color: "#f55d2c",
        marginBottom: "3px",
        textAlign: "left",
        textTransform: "uppercase",
    },
    title: {
        fontSize: "16px",
        fontWeight: 500,
        color: "#2b2f4c",
        marginBottom: "5px",
        lineHeight: "24px",
        textAlign: "left",
    },
    description: {
        fontWeight: 500,
        fontSize: "14px",
        color: "#8f91ac",
        textAlign: "left",
        lineHeight: "24px",
    },
}))
export default function CategorySlider() {
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        draggable: false,
        pauseOnHover: false
    };
    return (
        <div className={classes.topSlider}>
            <div className={classes.list}>
                <Slider {...settings}>
                    {slides.map(item => (
                        <div key={item.id}>
                            <div className={classes.imgWrap}>
                                <div className={classes.imgBorder}>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className={classes.slideContent}>
                                    <Typography className={classes.discount}>
                                        {item.discount}% OFF
                                    </Typography>
                                    <Typography className={classes.title}>
                                        {item.title}
                                    </Typography>
                                    <Typography className={classes.description}>
                                        {item.description}
                                    </Typography>
                                </div>
                                <Button variant="contained" color="secondary" className={classes.btn}>
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
