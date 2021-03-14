import { Box, Container, } from "@material-ui/core"
import React, { FC, } from "react"
import cx from "clsx"
import { makeStyles, } from "@material-ui/core/styles"
import Img from "../Elements/LazyImg/Img"
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

const imgList = (name, index) => ({
    img: require(`./${name}${index}.jpg`),
    lqip: require(`./${name}${index}.jpg?lqip`),
    webp: require(`./${name}${index}.jpg?webp`),
})

const banners = [
    {
        id: 1,
        aspectRatio: 370 / 290,
        ...imgList("lqip_banner-", 1),
    },
    {
        id: 2,
        aspectRatio: 370 / 290,
        ...imgList("lqip_banner-", 2),
    },
    {
        id: 3,
        aspectRatio: 370 / 290,
        ...imgList("lqip_banner-", 3),
    },
    {
        id: 4,
        full: true,
        aspectRatio: 8,
        ...imgList("lqip_banner-", 4),
    }
]

interface IItem {
    id: number
    full?: boolean
    aspectRatio: number
    img: string
    lqip: string
    webp: string
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
                            <Img
                                src={item.img}
                                lqip={item.lqip}
                                webp={item.webp}
                                aspectRatio={item.aspectRatio}
                                lazy
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default BannerSection
