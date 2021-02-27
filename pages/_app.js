import '../styles/globals.scss'
import React, { useEffect } from 'react';
import globalCss from '../styles/globalCss';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { WhiteTheme, DarkTheme } from '../theme';
import { MyThemeProvider, useThemeContext } from '../components/ThemeSwitcher/MyThemeProvider'
import { makeStyles } from '@material-ui/core/styles';
import { Provider } from "react-redux";
import store from "../store/store";

const useStyles = makeStyles(globalCss);

const Content = (props) => {
    const { nightMode } = useThemeContext()
    return (
        <Provider store={store}>
            <ThemeProvider theme={nightMode ? DarkTheme : WhiteTheme}>
                <CssBaseline />
                <EachComponent {...props} />
            </ThemeProvider>
        </Provider>
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