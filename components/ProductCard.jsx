import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        margin: "0 5px",
        padding: 20,
        boxShadow: "1px 1px 2px 1px rgb(0 0 0 / 3%)",
    },
}))

export default function ProductCard({ title, img, price, oldPrice, available, discount, }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader disableSpacing>
            </CardHeader>
            <CardContent disableSpacing>
                <Typography variant="subtitle1" color="textSecondary">
                    {available}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {title}
                </Typography>
            </CardContent>
            <CardMedia disableSpacing>
                <img src={img} alt="" />
            </CardMedia>
            <CardActions disableSpacing>

            </CardActions>

        </Card>
    )
}
