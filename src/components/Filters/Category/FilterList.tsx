import React, { FC, } from "react"
import { Box, } from "@material-ui/core"
import FilterBlock from "./FilterBlock"
import { IFilterList, } from "./Filter"
import { IFilterFields, SetFilter, } from "../../Product/ProductLists/CategoryPageList/CategoryPageListContainer"

interface IProps {
    filterList: IFilterList[]
    setFilter: SetFilter
    filter: IFilterFields
}

const FilterList: FC<IProps> = ({ filterList, setFilter, filter, }) => {
    return (
        <div>
            {filterList.map((item) => (
                <Box key={item.id} mt={4}>
                    <FilterBlock
                        title={item.title}
                        type={item.type}
                        filters={item.filters}
                        setFilter={setFilter}
                        activeField={filter[item.type]}
                    />
                </Box>
            ))}
        </div>
    )
}

export default FilterList
