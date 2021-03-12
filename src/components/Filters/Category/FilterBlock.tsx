import React, { FC, } from "react"
import cx from "clsx"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, Typography, } from "@material-ui/core"
import CheckBox from "../../Elements/CheckBox"
import { IFilter, } from "./Filter"
import { SetFilter, } from "../../Product/ProductLists/CategoryPageList/CategoryPageListContainer"

const useStyles = makeStyles((theme) => ({
    filters: {
        maxHeight: 125,
        overflowY: "scroll",
    },
}))

interface IProps {
    title: string
    type: string
    filters: IFilter[]
    setFilter: SetFilter
    activeField: any
}

const FilterBlock: FC<IProps> = ({ title, type, filters, setFilter, activeField, }) => {
    const classes = useStyles()

    return (
        <Box>
            <Box mb={1}>
                <Typography variant="h4">{title}</Typography>
            </Box>
            <Box className={cx(classes.filters, "scrollstyle_4")}>
                {filters.map((item) => (
                    <Box key={item.id}>
                        <CheckBox
                            onChange={setFilter(type, item.value)}
                            label={item.filter}
                            checked={activeField === item.value}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default FilterBlock
