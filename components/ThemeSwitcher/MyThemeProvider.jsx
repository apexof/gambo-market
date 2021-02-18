import React, { useState, createContext, useContext } from 'react'

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext)

export function MyThemeProvider({ children }) {

    const [nightMode, setTheme] = useState(false)
    const toggleTheme = () => setTheme(!nightMode)

    return (
        <ThemeContext.Provider value={{ nightMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
