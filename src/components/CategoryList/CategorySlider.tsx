import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, Container, } from "@material-ui/core"
import CategoryCard from "./CategoryCard"
import SectionTitle from "../Elements/SectionTitle"
import Slider from "../SliderSimpleArrows"
import { useCategories, } from "../../SWR"
import { Category, } from "../../types"

const responsive = [
    {
        breakpoint: 1280,
        settings: { slidesToShow: 5, },
    },
    {
        breakpoint: 959,
        settings: { slidesToShow: 4, },
    },
    {
        breakpoint: 730,
        settings: { slidesToShow: 3, },
    },
    {
        breakpoint: 520,
        settings: { slidesToShow: 2, },
    },
    {
        breakpoint: 350,
        settings: { slidesToShow: 1, },
    }
]

interface IProps {
    categories: Category[]
}

const useStyles = makeStyles((theme) => ({
    categorySlider: { margin: `${theme.spacing(6)} 0 0`, },
    itemWrap: {
        background: theme.palette.primary.main,
        boxShadow: "1px 1px 2px 1px rgb(0 0 0 / 3%)",
        borderRadius: 10,
        margin: `0 ${theme.spacing(1.5)}`,
    },
    list: {
        margin: `-${theme.spacing(1)} -${theme.spacing(1.5)}`,
        width: `calc(100% + ${theme.spacing(3)})`,
        "& .slick-track": { padding: `${theme.spacing(1)} 0`, },
    },
}))
const CategorySlider: FC<IProps> = ({ categories, }) => {
    const classes = useStyles()

    return (
        <section className={`${classes.categorySlider} market-section`} id="categories">
            <Container>
                <Box mb={3.5}>
                    <SectionTitle title="Categories" clarification="Shop By" />
                </Box>
                <div className={classes.list}>
                    <Slider slidesToShow={6} responsive={responsive}>
                        {categories.map((item) => (
                            <div key={item.id}>
                                <div className={classes.itemWrap}>
                                    <CategoryCard
                                        key={item.id}
                                        category={item}
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

export default CategorySlider
