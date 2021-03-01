import React, { FC, } from "react"
import { useRouter, } from "next/router"
import { makeStyles, } from "@material-ui/core/styles"
import CardMedia from "@material-ui/core/CardMedia"
import { Card, CardContent, Typography, } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {
        padding: 20,
        borderRadius: 0,
        background: "unset",
        boxShadow: "unset",
        cursor: "pointer",
    },
    imgWrap: {
        textAlign: "center",
        "& img": {
            width: 50,
            margin: "0 auto",
        },
    },
    title: {
        whiteSpace: "nowrap",
        fontSize: "15px",
        paddingBottom: 0,
        color: theme.palette.primary.contrastText,
    },
    cardContent: {
        padding: "0",
        marginTop: "15px",
        "&:last-child": { padding: "0", },
    },
}))

type Props = {
    title: string,
    img: string,
    closeModal?: () => void
}

const CategoryCard: FC<Props> = ({ title, img, closeModal, }) => {
    const classes = useStyles()
    const router = useRouter()
    const handleClick = () => {
        if (closeModal) closeModal()
        router.push("/category/top-featured-products")
    }
    return (
        <Card className={classes.root} onClick={handleClick}>
            <CardMedia image={img} />
            <div className={classes.imgWrap}>
                <img src={img} alt="" />
            </div>
            <CardContent className={classes.cardContent}>
                <Typography align="center" className={classes.title} color="textSecondary">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CategoryCard
