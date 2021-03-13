import { createMuiTheme, } from "@material-ui/core/styles"
import { mergeDeep, } from "./helpers"

const commonTheme = {
    spacing: (factor) => `${8 * factor}px`,
    breakpoints: {
        // values: {
        //     xs: 540,
        //     sm: 720,
        //     md: 960,
        //     lg: 1200,
        //     xl: 1400,
        // },
        // values: {
        //     xs: 0,
        //     sm: 540,
        //     md: 720,
        //     lg: 960,
        //     xl: 1200,
        // },
    },
    typography: {
        h2: {
            fontSize: 24,
            fontWeight: 600,
            margin: "0 0 27px 0",
        },
        h3: {
            fontSize: 14,
            fontWeight: 600,
            margin: "0 0 10px 0",
        },
        h4: {
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "24px",
            margin: "0 0 0 0",
        },
        h5: {
            marginLeft: 20,
            marginBottom: 20,
            fontWeight: 700,
            fontSize: 15,
            margin: "0 0 0 0",
        },
        subtitle1: {
            margin: 0,
            fontSize: 16,
            fontWeight: 700,
            lineHeight: "24px",
            textAlign: "center",
        },
        subtitle2: {
            textAlign: "center",
            fontSize: 12,
            fontWeight: 500,
            margin: 0,
            lineHeight: "24px",
        },
        body1: {
            fontSize: 14,
            fontWeight: 500,
        },
    },
}

const WhiteThemeNotMerged = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#fff",
            light: "#f7f7f7",
            dark: "#e5e5e5",
            contrastText: "#2b2f4c",
            line: "#efefef",
        },
        secondary: {
            light: "#ffecec",
            main: "#f55d2c",
            dark: "",
            contrastText: "#fff",
        },
        grey: { 50: "#efefef", },
        // error: {},
        // warning: {},
        // info: {},
        // success: {},
        text: {
            primary: "#2b2f4c",
            secondary: "#8f91ac",
            disabled: "#c7c7c7",
            hint: "",
        },
        background: {
            paper: "#fff",
            default: "#f7f7f7",
        },
    },
    typography: {
        h2: {
            // color: "#2b2f4c",
        },
        h3: { color: "#f55d2c", },
        subtitle1: { color: "#2b2f4c", },
        subtitle2: { color: "#8f91ac", },
    },
    // overrides: {
    //     MuiButton: {
    //         contained: {
    //             boxShadow: "0 1px 2px 0 #e9e9e9",
    //         },
    //         "&:hover": {
    //             boxShadow: "2px 3px 3px 2px #e9e9e9",
    //         }
    //     }
    // }
})

export const WhiteTheme = mergeDeep(WhiteThemeNotMerged, commonTheme)

const DarkThemeNotMerged = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#242424",
            dark: "#000",
            light: "rgba(255, 255, 255, 0.15)",
            contrastText: "#fff",
        },
        secondary: {
            light: "#333",
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
        },
        grey: { 50: "#333", },
    },
    typography: {
        h2: { color: "#fff", },
        h3: { color: "#f55d2c", },
        subtitle1: { color: "#fff", },
        subtitle2: { color: "#c7c7c7", },
    },
    // overrides: {
    //     MuiButton: {
    //         contained: {
    //             boxShadow: "0 1px 2px 0 #242424",
    //         },
    //         "&:hover": {
    //             boxShadow: "2px 3px 3px 2px #242424",
    //         }
    //     }
    // }
})

export const DarkTheme = mergeDeep(DarkThemeNotMerged, commonTheme)
