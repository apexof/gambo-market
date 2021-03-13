import React, { FC, } from "react"
import { useRouter, } from "next/router"
import { makeStyles, } from "@material-ui/core/styles"
import CardMedia from "@material-ui/core/CardMedia"
import { Card, CardContent, Typography, } from "@material-ui/core"
import Link from "../Elements/Link"
import { Category, } from "../../types"

const useStyles = makeStyles((theme) => ({
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
            height: 50,
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
    category: Category
    closeModal?: () => void
}

const CategoryCard: FC<Props> = ({ category, closeModal, }) => {
    const { name, icon, slug, } = category
    const classes = useStyles()
    const router = useRouter()
    const handleClick = () => {
        if (closeModal) closeModal()
        router.push(`/category/${slug}`)
    }

    return (
        <Link href={`/category/${slug}`}>
            <Card className={classes.root}>
                <CardMedia image={icon.url} />
                <div className={classes.imgWrap}>
                    <img src={icon.url} alt="" />
                </div>
                <CardContent className={classes.cardContent}>
                    <Typography align="center" className={classes.title} color="textSecondary">
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

export default CategoryCard
