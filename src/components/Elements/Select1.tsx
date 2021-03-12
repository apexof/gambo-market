import React, { FC, ChangeEvent, useState, } from "react"
import cx from "clsx"
import Icon from "@material-ui/core/Icon"
import { Box, FormControl, MenuItem, Select, Typography, } from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles"

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
    menuItemLi: { height: 42, },
    menuItem: {
        display: "flex",
        alignItems: "center",
        width: 200,
        padding: `0 ${theme.spacing(1)}`,
    },
    root: {
        background: theme.palette.primary.light,
        "&:focus": { background: theme.palette.primary.light, },
    },
}))

type SelectItem = {
    id: number,
    title: string,
}
type Props = {
    selectItems: SelectItem[]
}

const HeaderSelect: FC<Props> = ({ selectItems, }) => {
    const classes = useStyles()
    const [field, setField] = useState(1)

    const handleChange = (event: ChangeEvent<{ value: unknown }>): void => {
        setField(+event.target.value)
    }

    return (
        <FormControl className={cx(classes.formControl)}>
            <Select
                disableUnderline
                id="demo-simple-select-helper"
                value={field}
                onChange={handleChange}
                classes={{
                    select: classes.select,
                    root: classes.root,
                }}
            >
                {selectItems.map((item) => (
                    <MenuItem key={item.title} value={item.id} className={classes.menuItemLi}>
                        <div className={classes.menuItem}>
                            {field === item.id
                                && (
                                    <Box mr={0.5}>
                                        <Icon>room</Icon>
                                    </Box>
                                )}
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
