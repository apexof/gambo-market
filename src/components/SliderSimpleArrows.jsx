import React from "react"
import Slider from "react-slick"
import { makeStyles, } from "@material-ui/core/styles"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { IconButton, } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    nextBtn: (props) => ({
        margin: "0 -0.8rem",
        width: props.border ? 50 : 30,
        height: props.border ? 50 : 30,
        height: props.border ? 50 : 30,
        boxShadow: props.border ? "none" : "0px 2px 2px 0px rgb(0 0 0 / 7%)",
        backgroundColor: theme.palette.primary.main,
        border: props.border ? `10px solid ${theme.palette.background.default}` : `1px solid ${theme.palette.grey["50"]}`,
        right: "0px",
        zIndex: 1,
        top: "calc(50% - 25px)",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
        },
        "& .MuiIconButton-label": { alignItems: "center", },
    }),
    prevBtn: { left: "0px", },
}))

export const SampleNextArrow = ({ onClick, border = true, }) => {
    const classes = useStyles({ border, })

    return (
        <IconButton aria-label="next" onClick={onClick} className={classes.nextBtn}>
            <ChevronRightIcon />
        </IconButton>
    )
}

export const SamplePrevArrow = ({ onClick, border = true, }) => {
    const classes = useStyles({ border, })

    return (
        <IconButton onClick={onClick} className={`${classes.nextBtn} ${classes.prevBtn}`}>
            <ChevronLeftIcon />
        </IconButton>
    )
}

export default function SliderSimpleArrows({ children, slidesToShow, responsive, }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow,
        slidesToScroll: 1,
        draggable: false,
        lazyLoad: "ondemand",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive,
    }

    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}
