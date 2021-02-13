import React from 'react'
import MenuFooter from './MenuFooter'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
    container: {
        background: theme.palette.primary.main,
    },
    middleFooter: {
        display: "flex",
        justifyContent: "space-between",
        padding: "50px 0",
    },
}))

const menu3 = [
    {
        id: 1,
        title: "Gurugram"
    },
    {
        id: 2,
        title: "New Delhi"
    },
    {
        id: 3,
        title: "Bangaluru"
    },
    {
        id: 4,
        title: "Mumbai"
    },
    {
        id: 5,
        title: "Hyderabad"
    },
    {
        id: 6,
        title: "Kolkata"
    },
    {
        id: 7,
        title: "Ludhiana"
    },
    {
        id: 8,
        title: "Chandigrah"
    },
]

const menu2 = [
    {
        id: 1,
        title: "About US"
    },
    {
        id: 2,
        title: "Featured Products"
    },
    {
        id: 3,
        title: "Offers"
    },
    {
        id: 4,
        title: "Offers"
    },
    {
        id: 5,
        title: "Blog"
    },
    {
        id: 6,
        title: "Faq"
    },
    {
        id: 7,
        title: "Careers"
    },
    {
        id: 8,
        title: "Contact Us"
    },
]

const menu1 = [
    {
        id: 1,
        title: "Fruits and Vegetables"
    },
    {
        id: 2,
        title: "Grocery & Staples"
    },
    {
        id: 3,
        title: "Dairy & Eggs"
    },
    {
        id: 3,
        title: "Beverages"
    },
    {
        id: 4,
        title: "Beverages"
    },
    {
        id: 5,
        title: "Snacks"
    },
    {
        id: 6,
        title: "Home Care"
    },
    {
        id: 7,
        title: "Noodles & Sauces"
    },
    {
        id: 8,
        title: "Personal Care"
    },
    {
        id: 9,
        title: "Pet Care"
    },
    {
        id: 10,
        title: "Meat & Seafood"
    },
    {
        id: 11,
        title: "Electronics"
    },
]

export default function BannerSection() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Container>
                <div className={classes.middleFooter}>
                    <MenuFooter title="Categories" items={menu1} />
                    <MenuFooter title="Useful Links" items={menu2} />
                    <MenuFooter title="Top Cities" items={menu3} />
                    <div>
                        <Typography gutterBottom variant="h4">Download App</Typography>
                        <Image
                            src="/img/footer/googlePlay.svg"
                            alt="Picture of the author"
                            width={120}
                            height={35}
                        />
                        <Image
                            src="/img/footer/appStore.svg"
                            alt="Picture of the author"
                            width={120}
                            height={35}
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}