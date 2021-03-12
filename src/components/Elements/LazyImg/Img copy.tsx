import React, { FC, useRef, useEffect, useState, } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
`
const Img = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    object-position: center;
    filter: blur(5px);
`
const Source = styled(Img)`
  opacity: ${(p) => (p.loaded ? 1 : 0)};
  transition: all 1s ease;
  filter: unset;
`

type Props = {
    lqip: string
    src: string
    webp?: string
    aspectRatio: number
    alt?: string,
}

const ImgWithPreview: FC<Props> = ({ lqip, src, alt = "", aspectRatio, webp, }) => {
    // console.log(webp)
    const [loaded, setLoaded] = useState(false)
    const imgRef = useRef()
    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setLoaded(true)
        }
    }, [])

    return (
        <Wrapper>
            <div style={{ paddingBottom: `${100 / aspectRatio}%`, }} />
            <Img src={lqip} aria-hidden="true" alt="" />
            <Source
                loading="lazy"
                src={src}
                alt={alt}
                ref={imgRef}
                loaded={loaded}
                onLoad={() => setLoaded(true)}
            />
        </Wrapper>
    )
}

export default ImgWithPreview
