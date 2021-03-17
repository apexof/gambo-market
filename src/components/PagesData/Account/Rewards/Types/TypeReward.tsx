import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, Typography, } from "@material-ui/core"
import { IRewardType, } from "../../../../../pages/account/my-rewards"

const useStyles = makeStyles((theme) => ({
    item: {
        padding: theme.spacing(4),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        background: theme.palette.background.paper,
    },
    icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 40,
        borderRadius: "50%",
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    },
}))

interface IProps {
    rewardType: IRewardType
}

const TypeReward: FC<IProps> = ({ rewardType, }) => {
    const { title, icon, value, } = rewardType
    const classes = useStyles()

    return (
        <div className={classes.item}>
            <div className={classes.icon}>
                {icon}
            </div>
            <Box mt={2} mb={2}>
                <Typography variant="h4">{title}</Typography>
            </Box>
            <Typography variant="h3">{value}</Typography>
        </div>
    )
}

export default TypeReward
