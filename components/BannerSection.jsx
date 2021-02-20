import { Box, Container } from '@material-ui/core'
import React from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import SectionTitle from './Elements/SectionTitle';

const useStyles = makeStyles(theme => ({
    section: {
    },
    list: {
        display: "flex",
        flexWrap: "wrap",
        margin: `-${theme.spacing(1.5)}`,
        justifyContent: "space-between",
    },
    imgWrap: {
        padding: theme.spacing(1.5),
        "& img": {
            width: "100%",
            height: "100%",
        },
    },
    imgWrapPart: {
        width: "33.333%",
        [theme.breakpoints.down('md')]: {
            width: "50%",
            "&:first-child": {
                display: "none",
            }
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            "&:first-child": {
                display: "block",
            }
        },
    },
    imgWrapFull: {
        width: "100%",
    },
}))

const banners = [
    {
        id: 1,
        img: "/img/banners/banner-1.jpg",
    },
    {
        id: 2,
        img: "/img/banners/banner-2.jpg",
    },
    {
        id: 3,
        img: "/img/banners/banner-3.jpg",
    },
    {
        id: 4,
        img: "/img/banners/banner-4.jpg",
        full: true,
    },
]

export default function BannerSection() {
    const classes = useStyles();
    return (
        <section className={classes.section}>
            <Container>
                <Box mb={3.5}>
                    <SectionTitle title="Best Values" clarification="Offers" />
                </Box>
                <div className={classes.list}>
                    {banners.map(item => (
                        <div
                            key={item.id}
                            className={cx(classes.imgWrap, item.full ? classes.imgWrapFull : classes.imgWrapPart)}
                        >
                            <img src={item.img} alt="" />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
