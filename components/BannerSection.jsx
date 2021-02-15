import { Container } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SectionTitle from './SectionTitle';
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
    section: {
        margin: "47px 0 0",
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
        // [theme.breakpoints.dowm('sm')]: {
        //     width: "100%",
        //     "&:first-child": {
        //         display: "block",
        //     }
        // },
    },
    imgWrapFull: {
        width: "100%",
    },
}))

export default function BannerSection() {
    const classes = useStyles();
    return (
        <section className={classes.section}>
            <Container>
                <SectionTitle title="Best Values" clarification="Offers" />
                <div className={classes.list}>
                    <div className={`${classes.imgWrap} ${classes.imgWrapPart}`}>
                        <img src="/img/banners/banner-1.jpg" alt="" />
                    </div>
                    <div className={`${classes.imgWrap} ${classes.imgWrapPart}`}>
                        <img src="/img/banners/banner-2.jpg" alt="" />
                    </div>
                    <div className={`${classes.imgWrap} ${classes.imgWrapPart}`}>
                        <img src="/img/banners/banner-3.jpg" alt="" />
                    </div>
                    <div className={`${classes.imgWrap} ${classes.imgWrapFull}`}>
                        <img src="/img/banners/banner-4.jpg" alt="" />
                    </div>
                </div>
            </Container>
        </section>
    )
}
