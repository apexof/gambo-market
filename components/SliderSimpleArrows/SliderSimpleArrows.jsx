import React from 'react'
import NextIcon from './NextIcon'
import Slider from "react-slick";
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    prevBtn: {
        left: 0,
    },
    nextBtn: {
        width: "30px",
        height: "30px",
        backgroundColor: theme.palette.primary.white,
        right: 0,
        zIndex: 1,
        top: "calc(50% - 15px)",
        position: "absolute",
        boxShadow: "0px 2px 2px 0px rgb(0 0 0 / 7%)",
        border: "1px solid #e5e5e5 !important",
        "&:hover": {
            backgroundColor: theme.palette.primary.orange,
            color: theme.palette.primary.white,
        }
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
        speed: 500,
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
