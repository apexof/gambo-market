import React from 'react'
import Head from 'next/head'
import HeaderTop from './Header/HeaderTop/HeaderTop'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#fff",
            orange: "#f55d2c",
            grey: "#f7f7f7",
            darkBlue: "#2b2f4c",
        },
        secondary: {
            main: "#fff",
        },
    },
});

export default function MainLayout({ children }) {
    return (
        <div>
            <Head>
                <title>Gambo</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <HeaderTop />
                {children}
            </ThemeProvider>
        </div>
    )
}
