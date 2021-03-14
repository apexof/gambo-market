import React from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, Container, Grid, Link, List, ListItem, Typography, } from "@material-ui/core"

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
    }
]

const useStyles = makeStyles((theme) => ({
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
    menu: { padding: 0, },
    link: {
        color: theme.palette.primary.contrastText,
        transition: "all 0.3s ease",
        "&:hover": {
            color: theme.palette.secondary.main,
            textDecoration: "none",
        },
    },
}))

export default function BottomFooter() {
    const classes = useStyles()

    return (
        <div className={classes.bottomFooter}>
            <Container>
                <Grid container spacing={2} justify="center">
                    {menu.map((item) => (
                        <Grid item key={item.id}>
                            <Link className={classes.link} href="#">
                                {item.title}
                            </Link>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={2}>
                    <Typography align="center">
                        © Copyright 2021 Koutt . All rights reserved
                    </Typography>
                </Box>
            </Container>
        </div>
    )
}
