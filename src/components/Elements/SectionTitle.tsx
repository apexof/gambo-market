import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, Typography, } from "@material-ui/core"
import Link from "./Link"

const useStyles = makeStyles((theme) => ({
    link: {
        paddingBottom: 5,
        fontSize: 14,
        fontWeight: 500,
        color: theme.palette.primary.contrastText,
        "&:hover": {
            color: theme.palette.secondary.main,
            textDecoration: "none",
        },
    },
    titleBox: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
    },
}))

type Props = {
    title: string,
    clarification: string,
    seeAllLink?: string,
}

const SectionTitle: FC<Props> = ({ title, clarification, seeAllLink, }) => {
    const classes = useStyles()

    return (
        <div>
            <Typography variant="h3">{clarification}</Typography>
            <div className={classes.titleBox}>
                <Box>
                    <Typography variant="h2">{title}</Typography>
                </Box>
                {seeAllLink
                    && <Link href={seeAllLink} className={classes.link}>See All</Link>}
            </div>
        </div>
    )
}

export default SectionTitle
