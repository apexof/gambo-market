import { Switch } from '@material-ui/core';
import React from 'react'
import { useThemeContext } from './MyThemeProvider'

export default function ThemeSwitcher() {
    const { nightMode, toggleTheme } = useThemeContext()

    return (
        <Switch
            checked={nightMode}
            onChange={toggleTheme}
            name="checkedA"
            // color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
    )
}
