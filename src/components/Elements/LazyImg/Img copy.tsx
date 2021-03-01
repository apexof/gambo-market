import React, { FC, } from "react"
import styled from "styled-components"
import { withTheme, } from "@material-ui/core/styles"

const Wrapper = withTheme(styled.div`
    background-image: ${(p) => `url("${p.src}")`};
    background-repeat: no-repeat;
    background-size: cover;
`)

type Props = {
    img: {
        src: string,
        preview: string,
    }
}

const ImgWithPreview: FC<Props> = ({ img, }) => {
    return (
        <Wrapper src={img.preview}>
            <img src={img.src} alt="" />
        </Wrapper>
    )
}

export default ImgWithPreview
