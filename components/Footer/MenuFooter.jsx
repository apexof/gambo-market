import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link, List, ListItem, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    link: {
        color: theme.palette.primary.contrastText,
        transition: "all 0.3s ease",
        "&:hover": {
            color: theme.palette.secondary.main,
            marginLeft: "15px",
            textDecoration: "none"
        }
    },
}))

export default function MenuFooter({ title, items }) {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h4">{title}</Typography>
            <List>
                {items.map(item => (
                    <ListItem key={item.id} disableGutters>
                        <Link className={classes.link} href="#">
                            {item.title}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </>
    )
}