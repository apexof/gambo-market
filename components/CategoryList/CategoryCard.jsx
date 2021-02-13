import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 20,
        borderRadius: 0,
        background: "unset",
        boxShadow: "unset",
    },
    imgWrap: {
        textAlign: 'center',
        '& img': {
            width: 50,
            margin: "0 auto",
        }
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
        "&:last-child": {
            padding: "0",
        }
    },

}));

export default function CategoryCard({ title, img, }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
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
