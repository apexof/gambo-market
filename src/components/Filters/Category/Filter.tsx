import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import { Box, Toolbar, Typography, } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import FilterList from "./FilterList"
import CategoryList from "./CategoryList"
import { IFilterFields, SetFilter, } from "../../Product/ProductLists/CategoryPageList/CategoryPageListContainer"

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

export interface IFilter {
    id: number,
    filter: string
    value?: any
}

export interface IFilterList {
    id: number
    title: string
    type: string
    filters: IFilter[]
}
const filterList: IFilterList[] = [
    {
        id: 2,
        title: "Price",
        type: "price",
        filters: [
            {
                id: 2,
                filter: "$0 to $5",
                value: {
                    min: 2,
                    max: 5,
                },
            },
            {
                id: 4,
                filter: "$6 to $15",
                value: {
                    min: 6,
                    max: 15,
                },
            },
            {
                id: 6,
                filter: "$15 to $25",
                value: {
                    min: 15,
                    max: 25,
                },
            },
            {
                id: 7,
                filter: "More than $25",
                value: { min: 25, },
            }
        ],
    },
    {
        id: 3,
        title: "Discount",
        type: "discount",
        filters: [
            {
                id: 1,
                filter: "2% - 5%",
                value: {
                    min: 2,
                    max: 5,
                },
            },
            {
                id: 2,
                filter: "6% - 10%",
                value: {
                    min: 6,
                    max: 10,
                },
            },
            {
                id: 3,
                filter: "11% - 15%",
                value: {
                    min: 11,
                    max: 15,
                },
            },
            {
                id: 4,
                filter: "16% - 25%",
                value: {
                    min: 16,
                    max: 25,
                },
            }
        ],
    },
    {
        id: 4,
        title: "Available",
        type: "available",
        filters: [
            {
                id: 1,
                filter: "In Stock",
                value: true,
            },
            {
                id: 2,
                filter: "Out of Stock",
                value: false,
            }
        ],
    }
]

interface IProps {
    setFilter: SetFilter
    filter: IFilterFields
}

const Filter: FC<IProps> = ({ setFilter, filter, }) => {
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
                            setFilter={setFilter}
                            activeCategory={filter.category}
                        />
                        <FilterList filterList={filterList} setFilter={setFilter} filter={filter} />
                    </Box>
                </div>
            </Drawer>
        </>
    )
}

export default Filter
