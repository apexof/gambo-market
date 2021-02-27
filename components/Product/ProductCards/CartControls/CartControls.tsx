import React, { FC, ChangeEvent } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Input } from "@material-ui/core"
import { Product, AddToCart, RemoveFromCart, SetCountOfProducts } from "../../../../types"
import PlusCartButton from "./PlusCartButton"
import { haveItemInCart } from "../../../../helpers"

const useStyles = makeStyles(theme => ({
    cartControls: {
        display: "flex",
        alignItems: "center",
        width: 95,
        height: 30,
    },
    input: {
        height: 30,
        textAlign: "center",
        "& .MuiInputBase-input": { textAlign: "center", },
        borderTop: `1px solid ${theme.palette.grey["50"]}`,
        borderBottom: `1px solid ${theme.palette.grey["50"]}`,
    },
}))

type Props = {
    product: Product,
    cart: Product[],
    addToCart: AddToCart,
    removeFromCart: RemoveFromCart,
    setCountOfProducts: SetCountOfProducts,
}

const CartControl: FC<Props> = ({ cart, product, addToCart, removeFromCart, setCountOfProducts, }) => {
    const classes = useStyles()
    const count = haveItemInCart(cart, product.id)
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setCountOfProducts({ item: product, count: +event.target.value, })
    }

    const decrement = (): void => {
        if (count > 0) removeFromCart(product.id)
    }

    return (
        <div className={classes.cartControls}>
            <PlusCartButton type="left" onClick={decrement} />
            <Input
                disableUnderline
                value={Number(count).toString()}
                type="number"
                className={classes.input}
                onChange={handleChange}
            />
            <PlusCartButton type="right" onClick={() => addToCart(product)} />
        </div>
    )
}

export default CartControl
