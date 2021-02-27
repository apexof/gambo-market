import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Container } from "@material-ui/core"
import CategoryCard from "./CategoryCard"
import SectionTitle from "../Elements/SectionTitle"
import Slider from "../SliderSimpleArrows"

const categories = [
    {
        id: 0,
        title: " Electronics",
        img: "/img/categoryIcons/icon-1.svg",
    },
    {
        id: 1,
        title: "Snacks",
        img: "/img/categoryIcons/icon-2.svg",
    },
    {
        id: 2,
        title: "Meat & Seafood",
        img: "/img/categoryIcons/icon-3.svg",
    },
    {
        id: 3,
        title: " Electronics",
        img: "/img/categoryIcons/icon-1.svg",
    },
    {
        id: 4,
        title: "Snacks",
        img: "/img/categoryIcons/icon-2.svg",
    },
    {
        id: 5,
        title: "Meat & Seafood",
        img: "/img/categoryIcons/icon-3.svg",
    },
    {
        id: 6,
        title: " Electronics",
        img: "/img/categoryIcons/icon-1.svg",
    },
    {
        id: 7,
        title: "Snacks",
        img: "/img/categoryIcons/icon-2.svg",
    },
    {
        id: 8,
        title: "Meat & Seafood",
        img: "/img/categoryIcons/icon-3.svg",
    },
    {
        id: 9,
        title: " Electronics",
        img: "/img/categoryIcons/icon-1.svg",
    },
    {
        id: 10,
        title: "Snacks",
        img: "/img/categoryIcons/icon-2.svg",
    },
    {
        id: 11,
        title: "Meat & Seafood",
        img: "/img/categoryIcons/icon-3.svg",
    }
]

const responsive = [
    {
        breakpoint: 1280,
        settings: {
            slidesToShow: 5,
        },
    },
    {
        breakpoint: 959,
        settings: {
            slidesToShow: 4,
        },
    },
    {
        breakpoint: 730,
        settings: {
            slidesToShow: 3,
        },
    },
    {
        breakpoint: 520,
        settings: {
            slidesToShow: 2,
        },
    },
    {
        breakpoint: 350,
        settings: {
            slidesToShow: 1,
        },
    }
]

const useStyles = makeStyles((theme) => ({
    categorySlider: {
        margin: `${theme.spacing(6)} 0 0`,
    },
    itemWrap: {
        background: theme.palette.primary.main,
        boxShadow: "1px 1px 2px 1px rgb(0 0 0 / 3%)",
        borderRadius: 10,
        margin: `0 ${theme.spacing(1.5)}`,
    },
    list: {
        margin: `-${theme.spacing(1)} -${theme.spacing(1.5)}`,
        width: `calc(100% + ${theme.spacing(3)})`,
        "& .slick-track": {
            padding: `${theme.spacing(1)} 0`,
        },
        "& button:last-child": {
            // right: "3px",
        },
        "& button:first-child": {
            // left: "2px",
        },
    },
}))
export default function CategorySlider() {
    const classes = useStyles()

    return (
        <section className={`${classes.categorySlider} market-section`} id="categories">
            <Container>
                <Box mb={3.5}>
                    <SectionTitle title="Categories" clarification="Shop By" seeAllLink={false} />
                </Box>
                <div className={classes.list}>
                    <Slider slidesToShow={6} responsive={responsive}>
                        {categories.map((item) => (
                            <div key={item.id}>
                                <div className={classes.itemWrap}>
                                    <CategoryCard
                                        key={item.id}
                                        title={item.title}
                                        img={item.img}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </section>
    )
}
