import useSWR from "swr"
import { useRouter, } from "next/router"
import React, { FC, useState, } from "react"
import Loader from "../../../Elements/Loader"
import SwrError from "../../../../components/Elements/SwrError"
import { SortType, } from "../../../../types"
import { defaultFields, } from "../../../../GraphQL"
import CategoryPageList from "./CategoryPageList"
import { fetcher, } from "../../../../SWR/common"
import { sortFN, } from "./sort"

interface ISortType {
    type: SortType
}

const query = (slug) => `
query GET_PRODUCTS_BY_CATEGORY_SLUG {    
    products(where: {category: {slug_starts_with: "${slug}"}}) {
        ${defaultFields}
        category {name}
    }
}
`

const CategoryPageListContainer: FC = () => {
    const { priceLowToHigh, } = SortType
    const [activeCategory, setCategory] = useState("fruits")
    const [sortType, setSort] = useState<ISortType>({ type: priceLowToHigh, })

    const { data: products, error, } = useSWR(query(activeCategory), fetcher("products"))

    const toggleCategory = (slug: string) => () => {
        if (activeCategory === slug) setCategory("")
        else setCategory(slug)
    }

    if (error) return <SwrError error={error} />
    if (!products) { return (<Loader h={645} />) }

    products.sort(sortFN[sortType.type])

    return (
        <CategoryPageList
            toggleCategory={toggleCategory}
            activeCategory={activeCategory}
            title={activeCategory ? products[0].category.name : "All products"}
            products={products}
            setSort={setSort}
            sortType={sortType.type}
        />
    )
}

export default CategoryPageListContainer
