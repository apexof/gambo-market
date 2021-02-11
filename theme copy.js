import { createMuiTheme } from '@material-ui/core/styles';

export const WhiteTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#2b2f4c",
            white: "#fff",
            orange: "#f55d2c",
            grey: "#f7f7f7",
            darkBlue: "#2b2f4c",
            black: "#2b2f4c",
        },
        secondary: {
            main: "#f55d2c",
        },
        black: {
            main: "#2b2f4c",
        },
    },
    typography: {
        allVariants: {
            color: '#2b2f4c',
        },
        h2: {
            fontSize: "24px",
            fontWeight: "600",
            color: "#2b2f4c",
            margin: "0 0 27px 0",
            display: "block",
        },
        h3: {
            fontSize: 14,
            fontWeight: 600,
            textAlign: "left",
            color: "#f55d2c",
            marginBottom: 10,
        },
    }
});
export const DarkTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#2b2f4c",
            white: "#fff",
            orange: "#f55d2c",
            grey: "#f7f7f7",
            darkBlue: "#2b2f4c",
            black: "#2b2f4c",
        },
        secondary: {
            main: "#f55d2c",
        },
        black: {
            main: "#2b2f4c",
        },
    },
    typography: {
        allVariants: {
            color: '#2b2f4c',
        },
        h2: {
            fontSize: "24px",
            fontWeight: "600",
            color: "#fff",
            margin: "0 0 27px 0",
            display: "block",
        },
        h3: {
            fontSize: 14,
            fontWeight: 600,
            textAlign: "left",
            color: "#f55d2c",
            marginBottom: 10,
        },
    }
});
