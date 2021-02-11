import React from 'react'
import CategoryCard from './CategoryCard'
import SectionTitle from '../SectionTitle'
import Slider from '../SliderSimpleArrows/SliderSimpleArrows'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const categories = [
    {
        id: 0,
        title: " Electronics",
        img: "/img/categoryIcons/icon-1.svg"
    },
    {
        id: 1,
        title: "Snacks",
        img: "/img/categoryIcons/icon-2.svg"
    },
    {
        id: 2,
        title: "Meat & Seafood",
        img: "/img/categoryIcons/icon-3.svg"
    },
    {
        id: 3,
        title: " Electronics",
        img: "/img/categoryIcons/icon-1.svg"
    },
    {
        id: 4,
        title: "Snacks",
        img: "/img/categoryIcons/icon-2.svg"
    },
    {
        id: 5,
        title: "Meat & Seafood",
        img: "/img/categoryIcons/icon-3.svg"
    },
    {
        id: 6,
        title: " Electronics",
        img: "/img/categoryIcons/icon-1.svg"
    },
    {
        id: 7,
        title: "Snacks",
        img: "/img/categoryIcons/icon-2.svg"
    },
    {
        id: 8,
        title: "Meat & Seafood",
        img: "/img/categoryIcons/icon-3.svg"
    },
    {
        id: 9,
        title: " Electronics",
        img: "/img/categoryIcons/icon-1.svg"
    },
    {
        id: 10,
        title: "Snacks",
        img: "/img/categoryIcons/icon-2.svg"
    },
    {
        id: 11,
        title: "Meat & Seafood",
        img: "/img/categoryIcons/icon-3.svg"
    },
]

const useStyles = makeStyles(theme => ({
    categorySlider: {
        marginTop: 47,
    },
    list: {
        margin: "-10px -15px",
        "& .slick-track": {
            padding: "10px 0",
        }
    },
}))
export default function CategorySlider() {
    const classes = useStyles();

    return (
        <section className={classes.categorySlider}>
            <Container>
                <SectionTitle title="Categories" clarification="Shop By" />
                <div className={classes.list}>
                    <Slider slidesToShow={6}>
                        {categories.map(item => (
                            <CategoryCard
                                key={item.id}
                                title={item.title}
                                img={item.img}
                            />
                        ))}
                    </Slider>
                </div>
            </Container>
        </section>
    )
}
