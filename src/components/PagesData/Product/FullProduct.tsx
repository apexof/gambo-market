import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, Grid, Typography, } from "@material-ui/core"
import WeightList from "../../Product/ProductCards/WeightList"
import Features from "./Features"
import PriceBlock from "./PriceBlock"
import Slider from "./Slider"
import { Product, } from "../../../types"

const useStyles = makeStyles((theme) => ({
    product: {
        background: theme.palette.background.paper,
        display: "flex",
        padding: theme.spacing(3),
    },
    title: { marginBottom: theme.spacing(2), },
}))

interface IProps {
    product: Product
}

const FullProduct: FC<IProps> = ({ product, }) => {
    const classes = useStyles()
    const { images, title, id, available, weight, price, oldPrice, } = product

    return (
        <div className={classes.product}>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Box pr={3}>
                        <Slider items={images} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div>
                        <Box mb={3.5}>
                            <Typography className={classes.title} variant="h2">{title}</Typography>
                        </Box>
                        <Box display="flex" mb={2}>
                            <Box mr={4} mb={1}>
                                <Typography variant="h5">
                                    Product No.
                                    <Typography component="span" color="textSecondary">
                                        {id}
                                    </Typography>
                                </Typography>
                            </Box>
                            <Typography variant="h5">
                                Available
                                <Typography component="span" color="textSecondary">
                                    {` (${available ? "In" : "Out Of"} Stock)`}
                                </Typography>
                            </Typography>
                        </Box>
                        <WeightList items={weight} />
                        <Box my={3}>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate, purus at tempor blandit, nulla felis dictum eros, sed volutpat odio sapien id lectus. Cras mollis massa ac congue posuere. Fusce viverra mauris vel magna pretium aliquet. Nunc tincidunt, velit id tempus tristique, velit dolor hendrerit nibh, at scelerisque neque mauris sed ex.
                            </Typography>
                        </Box>
                        <PriceBlock product={product} price={price} oldPrice={oldPrice} />
                        <Features />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default FullProduct
