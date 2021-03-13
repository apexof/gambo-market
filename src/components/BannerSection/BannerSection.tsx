import { Box, Container, } from "@material-ui/core"
import React, { FC, } from "react"
import cx from "clsx"
import { makeStyles, } from "@material-ui/core/styles"
import Img from "../Elements/LazyImg/Img"
import banner1 from "./banner-1.jpg"
import banner2 from "./banner-2.jpg"
import banner3 from "./banner-3.jpg"
import banner4 from "./banner-4.jpg"
import SectionTitle from "../Elements/SectionTitle"

const useStyles = makeStyles((theme) => ({
    section: {},
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
        [theme.breakpoints.down("md")]: {
            width: "50%",
            "&:first-child": { display: "none", },
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            "&:first-child": { display: "block", },
        },
    },
    imgWrapFull: { width: "100%", },
}))

const banners = [
    {
        id: 1,
        img: banner1,
        aspectRatio: 370 / 290,
    },
    {
        id: 2,
        img: banner2,
        aspectRatio: 370 / 290,
    },
    {
        id: 3,
        img: banner3,
        aspectRatio: 370 / 290,
    },
    {
        id: 4,
        img: banner4,
        full: true,
        aspectRatio: 8,
    }
]

interface IItem {
    id: number
    full?: boolean
    aspectRatio: number
    img: {
        src: string
        preSrc: string
    }
}

const BannerSection: FC = () => {
    const classes = useStyles()

    return (
        <section className={`${classes.section} market-section`} id="best-values">
            <Container>
                <Box mb={3.5}>
                    <SectionTitle title="Best Values" clarification="Offers" />
                </Box>
                <div className={classes.list}>
                    {banners.map((item: IItem) => (
                        <div key={item.id} className={cx(classes.imgWrap, item.full ? classes.imgWrapFull : classes.imgWrapPart)}>
                            <Img src={item.img.src} lqip={item.img.preSrc} aspectRatio={item.aspectRatio} lazy />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default BannerSection
