import { createMuiTheme } from '@material-ui/core/styles';

export const WhiteTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#fff",
            // dark: "#f7f7f7",
            light: "#f7f7f7",
            // white: "#fff",
            // orange: "#f55d2c",
            // grey: "#f7f7f7",
            // darkBlue: "#2b2f4c",
            // black: "#2b2f4c",
            contrastText: "#2b2f4c",
        },
        secondary: {
            light: "#f69733",
            main: "#f55d2c",
            dark: "",
            contrastText: "#fff",
        },
        // error: {},
        // warning: {},
        // info: {},
        // success: {},
        text: {
            primary: "#2b2f4c",
            secondary: "#f55d2c",
            disabled: "#c7c7c7",
            hint: "",
        },
        background: {
            paper: "#fff",
            default: "#f7f7f7",
        }
    },
    typography: {
        // allVariants: {
        //     color: '#2b2f4c',
        // },
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
        type: "dark",
        primary: {
            main: "#242424",
            dark: "#000",
            light: "rgba(255, 255, 255, 0.15)",
            contrastText: "#fff",
        },
        secondary: {
            light: "#f69733",
            main: "#f55d2c",
            dark: "",
            contrastText: "#fff",
        },
        text: {
            primary: "#fff",
            secondary: "#c7c7c7",
            disabled: "#c7c7c7",
            hint: "",
        },
        background: {
            paper: "#242424",
            default: "#000",
        }
    },
    typography: {
        // allVariants: {
        //     color: '#2b2f4c',
        // },
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
