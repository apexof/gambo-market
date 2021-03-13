import React, { FC, } from "react"
import { Box, } from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles"

const useStyles = makeStyles({
    img: (p) => ({
        position: "absolute",
        top: `calc(50% - ${p.size}px / 2)`,
        left: `calc(50% - ${p.size}px / 2)`,
        zIndex: 1,
        width: p.size,
        height: p.size,
    }),
})

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
    const classes = useStyles({ size: s, })

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
            <img
                className={classes.img}
                src="/img/loader/preloader.gif"
                alt="Загрузка..."
            />
        </Box>
    )
}

export default Loading
