import React, { FC, ChangeEvent, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Checkbox, FormControlLabel, } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: { padding: `3px ${theme.spacing(1)}`, },
    checked: {
        color: `${theme.palette.secondary.main} !important`,
        background: theme.palette.background.paper,
    },
}))

interface IProps {
    label: string
    checked: boolean
    onChange?: (param: any) => void
}

const CheckBox: FC<IProps> = ({ label, onChange, checked, }) => {
    const classes = useStyles()

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (onChange) onChange(event.target.checked)
    }

    return (
        <FormControlLabel
            control={(
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                    classes={{
                        root: classes.root,
                        checked: classes.checked,
                    }}
                />
            )}
            label={label}
        />
    )
}

export default CheckBox
