import { Container } from '@material-ui/core'
import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import SectionTitle from './SectionTitle'
import { makeStyles } from '@material-ui/core/styles';
import Slider from './SliderSimpleArrows/SliderSimpleArrows';

const useStyles = makeStyles(theme => ({
    list: {
        margin: `-10px -${theme.spacing(1.5)}`,
        width: `calc(100% + ${theme.spacing(3)})`,
        "& .slick-track": {
            padding: "10px 0",
        }
    },
}))
export default function ProductList({ productArray, title, clarification }) {
    const classes = useStyles();

    return (
        <Container>
            <SectionTitle title={title} clarification={clarification} />
            <div className={classes.list}>
                <Slider slidesToShow={5}>
                    {productArray.map(item => (
                        <ProductCard
                            key={item.id}
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            available={item.available}
                            discount={item.discount}
                        />
                    ))}
                </Slider>
            </div>
        </Container>
    )
}
