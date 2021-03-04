const globalCss = (theme) => ({
    "@global": {
        ".scrollstyle_4": {
            "&::-webkit-scrollbar": {
                width: 4,
                backgroundColor: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": { backgroundColor: theme.palette.type === "dark" ? "#c7c7c7" : "#e5e5e5", },
            "&::-webkit-scrollbar-track": { backgroundColor: theme.palette.background.paper, },
        },
        ".shadow1": { boxShadow: `0 1px 2px 0 ${theme.palette.type === "dark" ? "#242424" : "#e9e9e9"} !important`, },
        ".shadow2": {
            boxShadow: "0 8px 32px rgb(0 0 0 / 8%) !important",
            transition: "all .25s ease !important",
            "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 24px 56px rgb(0 0 0 / 14%) !important",
            },
        },
    },
})

export default globalCss
