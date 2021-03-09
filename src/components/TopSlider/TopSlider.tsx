import React, { FC, } from "react"
import Slider from "react-slick"
import { makeStyles, } from "@material-ui/core/styles"
import { Button, Typography, } from "@material-ui/core"
import slideImg1 from "./slide-1.jpg"
import slideImg2 from "./slide-2.jpg"
import Img from "../Elements/LazyImg/Img"

const slides = [
    {
        id: 0,
        img: slideImg1,
        discount: "3",
        title: "Buy More & Save More",
        description: "Nuts & Snacks",
    },
    {
        id: 1,
        img: slideImg2,
        discount: "3",
        title: "Buy More & Save More",
        description: "Nuts & Snacks",
    },
    {
        id: 2,
        img: slideImg1,
        discount: "3",
        title: "Buy More & Save More",
        description: "Nuts & Snacks",
    },
    {
        id: 3,
        img: slideImg2,
        discount: "3",
        title: "Buy More & Save More",
        description: "Nuts & Snacks",
    },
    {
        id: 4,
        img: slideImg1,
        discount: "3",
        title: "Buy More & Save More",
        description: "Nuts & Snacks",
    },
    {
        id: 5,
        img: slideImg2,
        discount: "3",
        title: "Buy More & Save More",
        description: "Nuts & Snacks",
    }
]

const useStyles = makeStyles((theme) => ({
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
        margin: `0 ${theme.spacing(1.5)}`,
    },
    list: {
        margin: `-10px -${theme.spacing(1.5)}`,
        width: `calc(118% + ${theme.spacing(3)})`,
        transform: "translate(-9%)",
        "& .slick-track": { padding: "10px 0", },
        [theme.breakpoints.down("md")]: {
            width: `calc(100% + ${theme.spacing(3)})`,
            transform: "unset",
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

interface ISlide {
    id: number,
    img: {
        src: string
        preSrc: string
    },
    discount: string,
    title: string,
    description: string,
}

const TopSlider: FC = () => {
    const classes = useStyles()
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        // lazyLoad: "ondemand",
        autoplay: true,
        autoplaySpeed: 1500,
        draggable: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 4, },
            },
            {
                breakpoint: 1050,
                settings: { slidesToShow: 3, },
            },
            {
                breakpoint: 850,
                settings: { slidesToShow: 2, },
            },
            {
                breakpoint: 490,
                settings: { slidesToShow: 1, },
            }
        ],
    }

    return (
        <div className={classes.topSlider}>
            <div className={classes.list}>
                <Slider {...settings}>
                    {slides.map((item: ISlide) => (
                        <div key={item.id}>
                            <div className={classes.imgWrap}>
                                <div className={classes.imgBorder}>
                                    <Img src={item.img.src} lqip={item.img.preSrc} aspectRatio={500 / 320} />
                                </div>
                                <div className={classes.slideContent}>
                                    <Typography className={classes.discount}>
                                        {`${item.discount}% OFF`}
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

export default TopSlider
