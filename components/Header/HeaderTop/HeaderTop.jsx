import { AppBar, Container, Toolbar, Link } from '@material-ui/core';
import React from 'react'
import HeaderSelect from './HeaderSelect'
import HeaderSearch from './HeaderSearch'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {

    return {
        header: {
            color: theme.palette.primary.main,
        },
        img: {
            width: "125px",
        }
    }

});


const selectItems = [
    {
        id: 0,
        title: "Gurugram"
    },
    {
        id: 1,
        title: "New Delhi"
    },
    {
        id: 2,
        title: "Bangaluru"
    },
    {
        id: 3,
        title: "Mumbai"
    },
    {
        id: 4,
        title: "Hyderabad"
    },
    {
        id: 5,
        title: "Kolkata"
    },
    {
        id: 6,
        title: "Ludhiana"
    },
    {
        id: 7,
        title: "Chandigrah"
    },
]

export default function HeaderTop() {
    const c = useStyles();

    return (
        <AppBar className={c.header}>
            <Container>
                <Toolbar>
                    <Link href="#" onClick={e => e.preventDefault}>
                        <img className={c.img} src="/main-logo.svg" alt="" />
                    </Link>
                    <HeaderSelect selectItems={selectItems} />
                    <HeaderSearch />
                </Toolbar>
            </Container>
        </AppBar >
    )
}
