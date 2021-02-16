import '../styles/globals.scss'
import React, { useEffect } from 'react';
import globalCss from './globalCss';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { WhiteTheme, DarkTheme } from '../theme';
import { MyThemeProvider, useThemeContext } from '../components/ThemeSwither/MyThemeProvider'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(globalCss);

const Content = (props) => {
    const { nightMode } = useThemeContext()
    return (
        <ThemeProvider theme={nightMode ? DarkTheme : WhiteTheme}>
            <CssBaseline />
            <EachComponent {...props} />
        </ThemeProvider>
    )
}

const EachComponent = (props) => {
    const { Component, pageProps } = props;
    useStyles();
    return <Component {...pageProps} />
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