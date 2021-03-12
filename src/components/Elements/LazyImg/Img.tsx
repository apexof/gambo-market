import React, { FC, useRef, useEffect, useState, } from "react"
import styled from "styled-components"
import { makeStyles, } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
    },
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
        filter: "blur(5px)",
    },
    source: {
        opacity: (p) => p["data-loaded"],
        transition: "all 1s ease",
        filter: "unset",
    },
}))

type Props = {
    lqip: string
    src: string
    webp?: string
    aspectRatio: number
    alt?: string,
}

const ImgWithPreview: FC<Props> = ({ lqip, src, alt = "", aspectRatio, webp, }) => {
    // console.log(webp)
    const classes = useStyles()
    const [loaded, setLoaded] = useState(false)
    const imgRef = useRef()
    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setLoaded(true)
        }
    }, [])

    return (
        <div className={classes.wrapper}>
            <div style={{ paddingBottom: `${100 / aspectRatio}%`, }} />
            <img className={classes.img} src={lqip} aria-hidden="true" alt="" />
            <img
                loading="lazy"
                src={src}
                alt={alt}
                ref={imgRef}
                data-loaded={loaded ? 1 : 0}
                className={`${classes.source} ${classes.img}`}
                onLoad={() => setLoaded(true)}
            />
        </div>
    )
}

export default ImgWithPreview
