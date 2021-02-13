import { Container } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SectionTitle from './SectionTitle';

const useStyles = makeStyles(theme => ({
    section: {
        margin: "47px 0 0",
    },
    list: {
        display: "flex",
        flexWrap: "wrap",
        margin: "-15px",
        justifyContent: "space-between"
    },
    imgWrap: {
        padding: 15,
    },
    imgWrapPart: {
        width: "33.333%",
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
