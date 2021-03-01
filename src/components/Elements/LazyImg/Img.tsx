import React, { FC, useRef, useEffect, useState, } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
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
    filter: blur(3px);
`
const Source = styled(Img)`
  opacity: ${(p) => (p.loaded ? 1 : 0)};
  transition: opacity 1s;
  filter: unset;
`

type Props = {
    img: {
        src: string,
        palette?: string[],
        preSrc: string,
    },
    alt?: string,
    aspectRatio: number,
}

const ImgWithPreview: FC<Props> = ({ img, alt = "", aspectRatio = (16 / 9), }) => {
    const imgRef = useRef()
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setLoaded(true)
        }
    }, [])

    return (
        <Wrapper>
            <div style={{ paddingBottom: `${100 / aspectRatio}%`, }} />
            <Img src={img.preSrc} aria-hidden="true" alt="" />
            <Source
                loading="lazy"
                src={img.src}
                alt={alt}
                loaded={loaded ? 1 : 0}
                ref={imgRef}
                onLoad={() => setLoaded(true)}
            />
        </Wrapper>
    )
}

export default ImgWithPreview
