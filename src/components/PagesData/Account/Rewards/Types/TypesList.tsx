import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import TypeReward from "./TypeReward"
import { IRewardType, } from "../../../../../pages/account/my-rewards"

const useStyles = makeStyles((theme) => ({
    list: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: theme.spacing(4),
    },
    item: {
        width: "33.333%",
        border: `1px solid ${theme.palette.grey["50"]}`,
        "& + $item": { borderLeft: 0, },
    },
}))

interface IProps {
    items: IRewardType[]
}

const TypeList: FC<IProps> = ({ items, }) => {
    const classes = useStyles()

    return (
        <div className={classes.list}>
            {items.map((item) => (
                <div key={item.id} className={classes.item}>
                    <TypeReward
                        rewardType={item}
                    />
                </div>
            ))}
        </div>
    )
}

export default TypeList
