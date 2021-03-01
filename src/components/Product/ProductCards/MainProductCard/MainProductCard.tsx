import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import React, { FC } from 'react'
import Link from '../../../Elements/Link'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import WishIcon from '../../../Elements/WishIcon';
import Price from '../../../Elements/Price';
import Img from '../../../Elements/LazyImg/Img';
import OldPrice from '../../../Elements/OldPrice';
import Discount from '../DiscountBlock';
import { Product, AddToCart } from '../../../../types';
import CartControls from '../CartControls';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';

const useStyles = makeStyles(theme => ({
    card: {
        padding: 15,
        position: "relative",
        transition: "all .25s ease !important",
        "&:hover": {
            transform: "scale(1.05)",
        },
    },
    wishIcon: {
        position: "absolute",
        top: 15,
        right: 15,
        zIndex: 1,
    },
    imgWrapper: {
        padding: "10px 20px",
        transition: "transform .5s ease",
        display: "flex",
        justifyContent: "center",
    },
    priceBlock: {
        marginTop: theme.spacing(1),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    cardActions: {
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
    },
    cartIcon: {
        cursor: "pointer",
    },
    discountWrapp: {
        position: "absolute",
        top: 15,
        left: 15,
        zIndex: 1,
    },
}))

type Props = {
    product: Product
    shadow: string
    addToCart: AddToCart
}

const ProductCard: FC<Props> = ({ product, shadow, addToCart }) => {
    const { title, img, price, oldPrice, available, discount, id } = product
    const classes = useStyles();
    if (typeof img !== "object") {
        return null
    }

    return (
        <Card className={cx(classes.card, shadow)}>
            <div className={classes.discountWrapp}>
                <Discount>{discount}</Discount>
            </div>
            <div className={classes.wishIcon}>
                <WishIcon product={product} />
            </div>
            <CardMedia>
                <Link href={`/product/${id}`} className={classes.imgWrapper}>
                    <Img img={img} />
                </Link>
            </CardMedia>
            <CardContent>
                <Typography variant="subtitle2">
                    {`Available ${available}`}
                </Typography>
                <Box mb={1}>
                    <Typography variant="subtitle1">
                        {title}
                    </Typography>
                </Box>
                <div className={classes.priceBlock}>
                    <Price>{price}</Price>
                    <OldPrice>{oldPrice}</OldPrice>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <CartControls product={product} />
                <ShoppingCartIcon className={classes.cartIcon} onClick={() => addToCart(product)} />
            </CardActions>
        </Card>
    )
}

export default ProductCard
