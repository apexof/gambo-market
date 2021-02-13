import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Link, List, ListItem, Typography } from '@material-ui/core';

const menu = [
    {
        id: 1,
        title: "About",
    },
    {
        id: 2,
        title: "Contact",
    },
    {
        id: 3,
        title: "Privacy Policy",
    },
    {
        id: 4,
        title: "Term & Conditions",
    },
    {
        id: 5,
        title: "Refund & Return Policy",
    },
]

const useStyles = makeStyles(theme => ({
    section: {
        color: theme.palette.type === "dark" ? "#c7c7c7" : "#f69733",
        background: theme.palette.primary.main,
        borderTop: `1px solid ${theme.palette.grey["50"]}`,

    },
    bottomFooter: {
        padding: "30px 0",
        background: theme.palette.primary.main,
        borderTop: `1px solid ${theme.palette.grey["50"]}`,
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        margin: "0 -10px",
        justifyContent: "center",
    },
    menuLi: {
        width: "auto",
        margin: "0 10px"
    },
    link: {
        color: theme.palette.primary.contrastText,
        transition: "all 0.3s ease",
        "&:hover": {
            color: theme.palette.secondary.main,
            marginTop: "-5px",
            textDecoration: "none"
        }
    },
}))

export default function BannerSection() {
    const classes = useStyles();

    return (
        <div className={classes.bottomFooter}>
            <Container>
                <List className={classes.menu}>
                    {menu.map(item => (
                        <ListItem key={item.id} disableGutters className={classes.menuLi}>
                            <Link className={classes.link} href="#">
                                {item.title}
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Typography align="center">
                    Copyright 2020 Gambolthemes . All rights reserved
            </Typography>
            </Container>
        </div>
    )
}