import React, { FC, useRef, useEffect, useState, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import LazyLoad from "react-lazy-load"
import cx from "clsx"

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
    lqip: string
    src: string
    webp: string
    aspectRatio: number
    alt?: string,
    lazy?: boolean
}

const ImgWithPreview: FC<Props> = ({ lqip, src, alt = "", aspectRatio, webp, lazy = false, }) => {
    const [loaded, setLoaded] = useState(false)
    const classes = useStyles({ loaded, })
    const imgRef = useRef()
    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setLoaded(true)
        }
    }, [])

    const content = (
        <>
            <img className={cx(classes.img, classes.preview)} src={lqip} aria-hidden="true" alt="" />
            <picture>
                {webp && (<source type="image/webp" srcSet={webp} />)}
                <img
                    src={src}
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
