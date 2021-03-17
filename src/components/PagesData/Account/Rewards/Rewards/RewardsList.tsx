import React, { FC, } from "react"
import { Grid, } from "@material-ui/core"
import Reward from "./Reward"
import { IReward, } from "../../../../../pages/account/my-rewards"

interface IProps {
    items: IReward[]
}

const RewardList: FC<IProps> = ({ items, }) => {
    return (
        <Grid container spacing={4}>
            {items.map((item) => (
                <Grid xs={12} sm={4} md={6} lg={4} item key={item.id}>
                    <Reward
                        reward={item}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default RewardList
