import React from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, Button, Container, Grid, Input, Typography, } from "@material-ui/core"
import Image from "next/image"
import TelegramIcon from "@material-ui/icons/Telegram"
import MenuFooter from "./MenuFooter"

const useStyles = makeStyles((theme) => ({
    container: { background: theme.palette.primary.main, },
    middleFooter: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "50px 0",
        margin: `-${theme.spacing(2)}`,
    },
    footerPart: {
        width: "25%",
        padding: theme.spacing(2),
        [theme.breakpoints.down("sm")]: { width: "50%", },
        [theme.breakpoints.down("xs")]: { width: "100%", },
    },
    payBlock: { margin: "20px 0", },
    sendNewsBtn: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        minWidth: "unset",
        "&:hover": {
            backgroundImage: "linear-gradient(to right, rgba(230, 92, 91, 0.9), rgba(245, 93, 44, 0.9))",
            background: theme.palette.secondary.main,
        },
    },
    inputWrap: {
        border: `1px solid ${theme.palette.grey["50"]}`,
        justifyContent: "space-between",
    },
}))

const menu3 = [
    {
        id: 1,
        title: "Gurugram",
    },
    {
        id: 2,
        title: "New Delhi",
    },
    {
        id: 3,
        title: "Bangaluru",
    },
    {
        id: 4,
        title: "Mumbai",
    },
    {
        id: 5,
        title: "Hyderabad",
    },
    {
        id: 6,
        title: "Kolkata",
    },
    {
        id: 7,
        title: "Ludhiana",
    },
    {
        id: 8,
        title: "Chandigrah",
    }
]

const menu2 = [
    {
        id: 1,
        title: "About US",
    },
    {
        id: 2,
        title: "Featured Products",
    },
    {
        id: 3,
        title: "Offers",
    },
    {
        id: 4,
        title: "Offers",
    },
    {
        id: 5,
        title: "Blog",
    },
    {
        id: 6,
        title: "Faq",
    },
    {
        id: 7,
        title: "Careers",
    },
    {
        id: 8,
        title: "Contact Us",
    }
]

const menu1 = [
    {
        id: 1,
        title: "Fruits and Vegetables",
    },
    {
        id: 2,
        title: "Grocery & Staples",
    },
    {
        id: 3,
        title: "Dairy & Eggs",
    },
    {
        id: 4,
        title: "Beverages",
    },
    {
        id: 5,
        title: "Beverages",
    },
    {
        id: 6,
        title: "Snacks",
    },
    {
        id: 7,
        title: "Home Care",
    },
    {
        id: 8,
        title: "Noodles & Sauces",
    },
    {
        id: 9,
        title: "Personal Care",
    },
    {
        id: 10,
        title: "Pet Care",
    },
    {
        id: 11,
        title: "Meat & Seafood",
    },
    {
        id: 12,
        title: "Electronics",
    }
]

export default function MiddleFooter() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Container>
                <div className={classes.middleFooter}>
                    <Box className={classes.footerPart}>
                        <MenuFooter title="Categories" items={menu1} />
                    </Box>
                    <Box className={classes.footerPart}>
                        <MenuFooter title="Useful Links" items={menu2} />
                    </Box>
                    <Box className={classes.footerPart}>
                        <MenuFooter title="Top Cities" items={menu3} />
                    </Box>
                    <Box className={classes.footerPart}>
                        <div className={classes.appBlock}>
                            <Box mb={1}>
                                <Typography variant="h4">Download App</Typography>
                            </Box>
                            <Image
                                src="/img/footer/googlePlay.svg"
                                alt=""
                                width={120}
                                height={35}
                            />
                            <Image
                                src="/img/footer/appStore.svg"
                                alt=""
                                width={120}
                                height={35}
                            />
                        </div>
                        <div className={classes.payBlock}>
                            <Box mb={1}>
                                <Typography variant="h4">Payment Method</Typography>
                            </Box>
                            {[1, 2, 3, 4, 6].map((i) => (
                                <Box key={i} mr={0.5} display="inline">
                                    <Image
                                        src={`/img/footer/pyicon-${i}.svg`}
                                        alt=""
                                        width={35}
                                        height={21}
                                    />
                                </Box>
                            ))}
                        </div>
                        <div className={classes.newsBlock}>
                            <Box mb={1}>
                                <Typography variant="h4">Newsletter</Typography>
                            </Box>
                            <Grid container spacing={1} alignItems="flex-end" className={classes.inputWrap}>
                                <Grid item>
                                    <Input
                                        className={classes.input}
                                        id="input-with-icon-grid"
                                        placeholder="Email Arrdess"
                                        disableUnderline
                                    />
                                </Grid>
                                <Grid item>
                                    <Button className={classes.sendNewsBtn}>
                                        <TelegramIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Box>
                </div>
            </Container>
        </div>
    )
}
