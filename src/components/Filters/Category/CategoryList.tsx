import React, { useState, FC, } from "react"
import cx from "clsx"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, Typography, } from "@material-ui/core"
import Loader from "../../Elements/Loader"
import { Category, } from "../../../types"
import { useCategories, } from "../../../SWR/useCategories"
import SwrError from "../../Elements/SwrError"

const useStyles = makeStyles((theme) => ({
    item: {
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        background: theme.palette.background.default,
        cursor: "pointer",
    },
    itemActive: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    },
}))

const CategoryList: FC = ({ toggleCategory, activeCategory, }) => {
    const classes = useStyles()

    const { data, error, } = useCategories()
    if (error) return <SwrError error={error} />
    if (!data?.categories) { return (<Loader w={190} h={64} s={20} />) }

    return (
        <Box>
            <Box mb={1}>
                <Typography variant="h4">Categories</Typography>
            </Box>
            <div>
                {data.categories.map((item: Category) => (
                    <div
                        key={item.id}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => { if (e.key === "Enter") toggleActive(item.slug)() }}
                        onClick={toggleCategory(item.slug)}
                        className={cx(classes.item, item.slug === activeCategory && classes.itemActive)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </Box>

    )
}

export default CategoryList
