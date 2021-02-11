import '../styles/globals.css'
import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { WhiteTheme, DarkTheme } from '../theme';
import { MyThemeProvider, useThemeContext } from '../components/ThemeSwither/MyThemeProvider'

const Content = (props) => {
    const { Component, pageProps } = props;
    const { nightMode } = useThemeContext()

    return (
        <ThemeProvider theme={nightMode ? DarkTheme : WhiteTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default function MyApp(props) {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <MyThemeProvider>
            <Content {...props} />
        </MyThemeProvider>
    );
}