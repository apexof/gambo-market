import React, { FC, } from "react"
import styled from "styled-components"
import { withTheme, } from "@material-ui/core/styles"
import { Box, } from "@material-ui/core"

const Img = styled.img`
  position: absolute;
  top: ${(props) => `calc(50% - ${props.size}px / 2)`};
  left: ${(props) => `calc(50% - ${props.size}px / 2)`};
  z-index: 1;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
`

interface IProps {
    h?: number
    w?: number
    s?: number
}

const Loading: FC<IProps> = ({ h = "auto", w = "auto", s = 50, }) => {
    return (
        <Box height={h} width={w} position="relative">
            <Img size={s} src="/img/loader/preloader.gif" alt="Загрузка..." />
        </Box>
    )
}

export default Loading
