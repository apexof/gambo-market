import React, { FC, } from "react"
import styled from "styled-components"
import { withTheme, } from "@material-ui/core/styles"
import { Typography, } from "@material-ui/core"

const Text = withTheme(styled(Typography)`
    color: ${(p) => p.theme.palette.secondary.main};
`)

type Props = {
    error: any
}

const SwrError: FC<Props> = ({ error, }) => {
    console.log("SwrError", error)

    return (
        <Text variant="h2">
            Произошла ошибка
        </Text>
    )
}

export default SwrError
