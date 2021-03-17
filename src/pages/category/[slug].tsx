import React, { FC, } from "react"
import { Box, } from "@material-ui/core"
import CategoryLayout from "../../components/Layouts/CategoryLayout"
import ProductList from "../../components/Product/ProductLists/CategoryPageList/CategoryPageListContainer"

const Category: FC = () => {
    return (
        <CategoryLayout>
            <Box mt={4}>
                <ProductList />
            </Box>
        </CategoryLayout>
    )
}

export default Category
