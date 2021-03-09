import React from "react"
import { makeStyles, } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import { Box, Toolbar, Typography, } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import FilterList from "./FilterList"
import CategoryList from "./CategoryList"

const useStyles = makeStyles((theme) => ({
    root: { overflowY: "hidden", },
    header: {
        background: theme.palette.type === "dark" ? "#000" : "#2b2f4c",
        padding: "15px 20px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    drawer: {
        width: 400,
        height: "100%",
    },
    closeIcon: {
        cursor: "pointer",
        color: "#fff",
    },
    content: {
        maxHeight: "calc(100% - 65px)",
        overflowY: "auto",
    },
}))
type Tfilter = {
    id: number,
    filter: string
}

export type TfilterList = {
    id: number,
    title: string
    filters: Tfilter[]
}
const filterList: TfilterList[] = [
    {
        id: 1,
        title: "Brand",
        filters: [
            {
                id: 1,
                filter: "Samsung",
            },
            {
                id: 2,
                filter: "Apple",
            },
            {
                id: 3,
                filter: "Xiaomi",
            },
            {
                id: 4,
                filter: "Samsung",
            },
            {
                id: 5,
                filter: "Apple",
            },
            {
                id: 6,
                filter: "Xiaomi",
            },
            {
                id: 7,
                filter: "Samsung",
            },
            {
                id: 8,
                filter: "Apple",
            },
            {
                id: 9,
                filter: "Xiaomi",
            }
        ],
    },
    {
        id: 2,
        title: "Price",
        filters: [
            {
                id: 1,
                filter: "Less than $2",
            },
            {
                id: 2,
                filter: "$2 to $5",
            },
            {
                id: 3,
                filter: "$6 to $10",
            },
            {
                id: 4,
                filter: "$11 to $15",
            },
            {
                id: 5,
                filter: "$15 to $20",
            },
            {
                id: 6,
                filter: "$21 to $25",
            },
            {
                id: 7,
                filter: "More than $25",
            }
        ],
    },
    {
        id: 3,
        title: "Discount",
        filters: [
            {
                id: 1,
                filter: "2% - 5%",
            },
            {
                id: 2,
                filter: "6% - 10%",
            },
            {
                id: 3,
                filter: "11% - 15%",
            },
            {
                id: 4,
                filter: "16% - 25%",
            }
        ],
    },
    {
        id: 4,
        title: "Pack Size",
        filters: [
            {
                id: 1,
                filter: "Combo 1 Items",
            },
            {
                id: 2,
                filter: "Combo 2 Items",
            },
            {
                id: 3,
                filter: "Combo 3 Items",
            },
            {
                id: 4,
                filter: "1 kg",
            },
            {
                id: 5,
                filter: "2 kg",
            },
            {
                id: 6,
                filter: "3 kg",
            },
            {
                id: 7,
                filter: "4 kg",
            },
            {
                id: 8,
                filter: "5 kg",
            }
        ],
    }
]

const Filter = ({ toggleCategory, activeCategory, }) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const toggleDrawer = () => setOpen(!open)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Button onClick={toggleDrawer} variant="contained" color="primary" className="shadow1">
                Filters
            </Button>
            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer}
                classes={{ root: classes.root, }}
            >
                <div
                    className={`${classes.drawer}`}
                    role="presentation"
                >
                    <Toolbar className={classes.header}>
                        <Typography variant="h4">
                            Filters
                        </Typography>
                        <CloseIcon
                            fontSize="large"
                            className={classes.closeIcon}
                            onClick={handleClose}
                        />
                    </Toolbar>
                    <Box p={2} className={`${classes.content} scrollstyle_4`}>
                        <CategoryList
                            toggleCategory={toggleCategory}
                            activeCategory={activeCategory}
                        />
                        <FilterList filterList={filterList} />
                    </Box>
                </div>
            </Drawer>
        </>
    )
}

export default Filter
