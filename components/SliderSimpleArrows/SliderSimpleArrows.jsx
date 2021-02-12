import React from 'react'
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    nextBtn: {
        margin: "0 -0.8rem",
        width: "50px",
        height: "50px",
        backgroundColor: theme.palette.primary.main,
        border: `10px solid ${theme.palette.background.default}`,
        right: "-7px",
        zIndex: 1,
        top: "calc(50% - 25px)",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
        },
        "& .MuiIconButton-label": {
            alignItems: "center",
        }
    },
    prevBtn: {
        left: "-7px",
    },
}))

export default function SliderSimpleArrows({ children, slidesToShow }) {
    const classes = useStyles();

    const SampleNextArrow = ({ onClick }) =>
        <IconButton aria-label="next" onClick={onClick} className={classes.nextBtn}>
            <ChevronRightIcon />
        </IconButton>

    const SamplePrevArrow = ({ onClick }) =>
        <IconButton onClick={onClick} className={`${classes.nextBtn} ${classes.prevBtn}`}>
            <ChevronLeftIcon />
        </IconButton>

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}
