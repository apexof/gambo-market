import { Box, Container, } from "@material-ui/core"
import React from "react"
import { makeStyles, } from "@material-ui/core/styles"
import ProductCard from "../ProductCards/MainProductCard"
import SectionTitle from "../../Elements/SectionTitle"
import Slider from "../../SliderSimpleArrows"

const useStyles = makeStyles((theme) => ({
    list: {
        margin: `0 -${theme.spacing(1.5)}`,
        width: `calc(100% + ${theme.spacing(3)})`,
        "& .slick-track": { padding: `${theme.spacing(2)} 0`, },
    },
}))

const responsive = [
    {
        breakpoint: 1200,
        settings: { slidesToShow: 4, },
    },
    {
        breakpoint: 980,
        settings: { slidesToShow: 3, },
    },
    {
        breakpoint: 760,
        settings: { slidesToShow: 2, },
    },
    {
        breakpoint: 520,
        settings: { slidesToShow: 1, },
    }
]

export default function ProductListSlider({ items, title, clarification, id, }) {
    const classes = useStyles()

    return (
        <Container className="market-section" id={id}>
            <Box mb={1.5}>
                <SectionTitle title={title} clarification={clarification} seeAllLink={`/category/${id}`} />
            </Box>
            <div className={classes.list}>
                <Slider slidesToShow={5} responsive={responsive}>
                    {items.map((item) => (
                        <div key={item.id}>
                            <Box mx={1.5}>
                                <ProductCard
                                    id={item.id}
                                    shadow="shadow1"
                                    product={item}
                                />
                            </Box>
                        </div>
                    ))}
                </Slider>
            </div>
        </Container>
    )
}
