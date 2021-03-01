import React, { FC, } from "react"
import styled from "styled-components"
import { withTheme, } from "@material-ui/core/styles"

const Wrapper = withTheme(styled.div`
    background-image: ${(p) => `url("${p.src}")`};
    background-repeat: no-repeat;
    background-size: cover; 
    filter: blur(3px);  
`)
const Img = withTheme(styled.img`
    filter: unset;  
`)

type Props = {
    img: {
        src: string,
        palette: string,
        preSrc: string,
    }
}

const ImgWithPreview: FC<Props> = ({ img, }) => {
    console.log(img)

    return (
        <Wrapper src={img.preSrc}>
            <Img src={img.src} alt="" />
        </Wrapper>
    )
}

export default ImgWithPreview
