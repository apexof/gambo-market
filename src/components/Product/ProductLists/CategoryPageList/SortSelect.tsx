import React, { FC, ChangeEvent, } from "react"
import cx from "clsx"
import { FormControl, MenuItem, Select, Typography, } from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles"
import { SetSort, SortSelectItem, SortType, } from "../../types"

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginLeft: 34,
        minWidth: 120,
        flexShrink: 0,
        overflow: "hidden",
        borderRadius: 5,
        "& .MuiInputBase-root": { height: 36, },
    },
    select: {
        height: 36,
        display: "flex",
    },
    menuItemLi: { height: "auto", },
    menuItem: {
        display: "flex",
        alignItems: "center",
        width: 200,
        padding: `0 ${theme.spacing(1)}`,
    },
    root: {
        background: theme.palette.background.paper,
        "&:focus": { background: theme.palette.background.paper, },
    },
}))

type Props = {
    selectItems: SortSelectItem[]
    setSort: SetSort
    sortType: SortType
}

const HeaderSelect: FC<Props> = ({ sortType, setSort, selectItems, }) => {
    const classes = useStyles()

    const handleChange = (event: ChangeEvent<{ value: unknown }>): void => {
        setSort({ type: event.target.value, })
    }

    return (
        <FormControl className={cx(classes.formControl, "shadow1")}>
            <Select
                disableUnderline
                id="demo-simple-select-helper"
                value={sortType}
                onChange={handleChange}
                classes={{
                    select: classes.select,
                    root: classes.root,
                }}
            >
                {selectItems.map((item) => (
                    <MenuItem
                        key={item.title}
                        value={item.type}
                        className={classes.menuItemLi}
                    >
                        <div className={classes.menuItem}>
                            <Typography>
                                {item.title}
                            </Typography>
                        </div>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default HeaderSelect
