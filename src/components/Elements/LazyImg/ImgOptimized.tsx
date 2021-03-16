import React, { FC, useRef, useEffect, useState, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import LazyLoad from "react-lazy-load"
import cx from "clsx"
import { getFileName, } from "../../../helpers"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
    },
    preview: { filter: "blur(5px)", },
    img: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        objectFit: "cover",
        objectPosition: "center",
        transition: "all 1s ease",
    },
    source: { opacity: (p) => (p.loaded ? 1 : 0), },
}))

type Props = {
    src: string
    aspectRatio: number
    alt?: string,
    lazy?: boolean
    context?: any
}

const ImgWithPreview: FC<Props> = ({ src, alt = "", aspectRatio, lazy = false, }) => {
    const [loaded, setLoaded] = useState(false)
    const classes = useStyles({ loaded, })
    const imgRef = useRef()
    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setLoaded(true)
        }
    }, [])
    // console.log(context(src))
    const getOriginal = require.context("../../../assets/img", false, /\.jpg$/)
    const getResised = require.context("../../../assets/img?resize&size=300", false, /\.jpg$/)
    const getLqip = require.context("../../../assets/img?lqip", false, /\.jpg$/)
    const getWebp = require.context("../../../assets/img?webp", false, /\.jpg$/)
    // const getResizedWebp = require.context("../../../../.next/static/images/?resize&size=300", false, /\.webp$/)

    const original = getOriginal(src)
    const resized = getResised(src)
    const lqip = getLqip(src)
    const webp = getWebp(src)

    const resizedFileName = getFileName(resized)
    // const resizedWebp = getResizedWebp(`./${webpFileName}`)

    console.log(resizedFileName)
    const content = (
        <>
            <img className={cx(classes.img, classes.preview)} src={lqip} aria-hidden="true" alt="" />
            <picture>
                {webp && (<source type="image/webp" srcSet={webp} />)}
                <img
                    src={original}
                    alt={alt}
                    ref={imgRef}
                    onLoad={() => setLoaded(true)}
                    className={cx(classes.img, classes.source)}
                />
            </picture>
        </>
    )

    return (
        <div className={classes.wrapper}>
            <div style={{ paddingBottom: `${100 / aspectRatio}%`, }} />
            {lazy
                && (
                    <LazyLoad offsetVertical={200} height="100%" width="100%">
                        {content}
                    </LazyLoad>
                )}
            {!lazy && content}
        </div>
    )
}

export default ImgWithPreview
