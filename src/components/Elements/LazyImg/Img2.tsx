import React, { FC, useRef, useEffect, useState, } from "react"
import styled from "styled-components"
import { LazyLoadImage, } from "react-lazy-load-image-component"

const Wrapper = styled.div`

`
const Img = styled.img`
    width: 100px;
    height: 100px;
`
const Source = styled(Img)`

`

type Props = {
    lqip: string
    src: string
    webp?: string
    aspectRatio: number
    alt?: string,
}

const ImgWithPreview: FC<Props> = ({ lqip, src, alt = "", aspectRatio, webp, }) => {
    console.log(webp)
    const [loaded, setLoaded] = useState(false)
    const imgRef = useRef()
    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setLoaded(true)
        }
    }, [])

    return (
        <div>
            <LazyLoadImage
                alt=""
                // src={src}
                placeholderSrc={lqip}
            />
        </div>
    )
}

export default ImgWithPreview
