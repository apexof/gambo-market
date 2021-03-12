import React, { useState, useEffect, FC, } from "react"
import Slider from "react-slick"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, } from "@material-ui/core"
import { ProductImg, } from "../../../types"
import Img from "../../Elements/LazyImg/Img"
import { SamplePrevArrow, SampleNextArrow, } from "../../SliderSimpleArrows"

const useStyles = makeStyles((theme) => ({ imgWrapp: { cursor: "pointer", }, }))

interface IProps {
    items: ProductImg[]
}

const ImgSlider: FC<IProps> = ({ items, }) => {
    let slider1
    let slider2
    const classes = useStyles()
    const [state, setState] = useState({ nav1: null, nav2: null, })
    const newItems: ProductImg[] = items.length === 1 ? Array(4).fill(items[0]) : items

    const itemArray = newItems.map((img) => (
        <div key={img.url}>
            <Box display="flex" justifyContent="center" className={classes.imgWrapp}>
                <Img webp={img.webp} src={img.url} lqip={img.lqip} aspectRatio={img.width / img.height} />
            </Box>
        </div>
    ))

    useEffect(() => setState({ nav1: slider1, nav2: slider2, }), [])

    return (
        <div>
            <Slider
                speed={300}
                asNavFor={state.nav2}
                // lazyLoad="ondemand"
                ref={(slider) => { slider1 = slider }}
                nextArrow={<SampleNextArrow border={false} />}
                prevArrow={<SamplePrevArrow border={false} />}
            >
                {itemArray}
            </Slider>
            <Slider
                speed={300}
                asNavFor={state.nav1}
                // lazyLoad="ondemand"
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

export default ImgSlider
