import React, { useRef, useState, useEffect, } from "react"
import Slider from "react-slick"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, } from "@material-ui/core"
import { SamplePrevArrow, SampleNextArrow, } from "../../SliderSimpleArrows"

const useStyles = makeStyles((theme) => ({ imgWrapp: { cursor: "pointer", }, }))

export default function AsNavFor({ items, }) {
    let slider1
    let slider2
    const classes = useStyles()
    const [state, setState] = useState({ nav1: null, nav2: null, })

    const itemArray = items.map((item) => (
        <div key={item.id}>
            <Box display="flex" justifyContent="center" className={classes.imgWrapp}>
                <img src={item.img} alt="" />
            </Box>
        </div>
    ))

    useEffect(() => setState({ nav1: slider1, nav2: slider2, }), [])

    return (
        <div>
            <Slider
                speed={300}
                asNavFor={state.nav2}
                lazyLoad="ondemand"
                ref={(slider) => { slider1 = slider }}
                nextArrow={<SampleNextArrow border={false} />}
                prevArrow={<SamplePrevArrow border={false} />}
            >
                {itemArray}
            </Slider>
            <Slider
                speed={300}
                asNavFor={state.nav1}
                lazyLoad="ondemand"
                ref={(slider) => { slider2 = slider }}
                slidesToShow={4}
                swipeToSlide
                focusOnSelect
            >
                {itemArray}
            </Slider>
        </div>
    )
}
