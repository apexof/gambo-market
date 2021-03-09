import React, { FC, ReactNode, } from "react"
import { withTheme, } from "@material-ui/core/styles"
import { Typography, } from "@material-ui/core"
import styled from "styled-components"

type Props = {
    border?: boolean,
    children: ReactNode
}

const Text = withTheme(styled(Typography)`
    background: ${(p) => p.theme.palette.background.paper};
    border-bottom: ${(p) => (p.border ? `1px solid ${p.theme.palette.grey["50"]}` : 0)};
    padding: 15px 20px;
`)

const BlockTitle: FC<Props> = ({ children, border = true, }) => (
    <Text border={border ? 1 : 0} variant="h4">{children}</Text>
)

export default BlockTitle
