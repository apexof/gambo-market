import React, { FC, } from "react"
import styled from "styled-components"
import { Box, } from "@material-ui/core"

const Img = styled.img`
  position: absolute;
  top: ${(props) => `calc(50% - ${props["data-size"]}px / 2)`};
  left: ${(props) => `calc(50% - ${props["data-size"]}px / 2)`};
  z-index: 1;
  width: ${(props) => `${props["data-size"]}px`};
  height: ${(props) => `${props["data-size"]}px`};
`

interface IProps {
    h?: number
    w?: number | string
    s?: number
    ratio?: {
        xs: number
        sm: number
        md: number
        lg: number
    }
}

const Loading: FC<IProps> = ({ ratio, h = "auto", w = "auto", s = 20, }) => {
    return (
        <Box
            pb={ratio && {
                xs: `${100 / ratio.xs}%`,
                sm: `${100 / ratio.sm}%`,
                md: `${100 / ratio.md}%`,
                lg: `${100 / ratio.lg}%`,
            }}
            height={h}
            width={w}
            position="relative"
        >
            <Img data-size={s} src="/img/loader/preloader.gif" alt="Загрузка..." />
        </Box>
    )
}

export default Loading
