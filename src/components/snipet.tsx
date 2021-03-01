import React, { FC, } from "react"
import styled from "styled-components"
import { withTheme, } from "@material-ui/core/styles"
import { Typography, } from "@material-ui/core"

const Text = withTheme(styled(Typography)`
    background: ${(p) => p.theme.palette.background.paper};
    border-bottom: ${(p) => (p.border ? `1px solid ${p.theme.palette.grey["50"]}` : 0)};
`)

type Props = {

}

const Component: FC<Props> = ({ }) => {
    console.log("object")

    return (
        <Text>
            text
        </Text>
    )
}

export default Component
