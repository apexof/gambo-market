import React, { useState, FC, } from "react"
import cx from "clsx"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, Typography, } from "@material-ui/core"
import { Category, } from "../../../types"

const useStyles = makeStyles((theme) => ({
    item: {
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        background: theme.palette.background.default,
        cursor: "pointer",
    },
    itemActive: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    },
}))

type Props = {
    list: Category[]
}

const CategoryList: FC<Props> = ({ list, }) => {
    const classes = useStyles()
    const [active, setActive] = useState("")
    const toggleActive = (id: string) => () => {
        if (active === id) setActive("")
        else setActive(id)
    }
    return (
        <Box>
            <Box mb={1}>
                <Typography variant="h4">Categories</Typography>
            </Box>
            <div>
                {list.map((item) => (
                    <div
                        key={item.id}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => { if (e.key === "Enter") toggleActive(item.id)() }}
                        onClick={toggleActive(item.id)}
                        className={cx(classes.item, item.id === active && classes.itemActive)}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
        </Box>

    )
}

export default CategoryList
