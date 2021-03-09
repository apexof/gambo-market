import useSWR from "swr"
import { gql, } from "@apollo/client"
import { useRouter, } from "next/router"
import React, { FC, useState, } from "react"
import Loader from "../../../Elements/Loader"
import SwrError from "../../../../components/Elements/SwrError"
import { Product, } from "../../../../types"
import { apolloClient, GET_PRODUCTS_BY_CATEGORY_SLUG, } from "../../../../GraphQL"
import CategoryPageList from "./CategoryPageList"

const fetcher = (params) => async (query) => {
    const { slug, } = params
    const { data, } = await apolloClient.query({
        query: gql(query),
        variables: { slug, },
    })

    return data.products
}

interface IProps {
    initProducts: Product[]
    title: string
}

const CategoryPageListContainer: FC<IProps> = ({ initProducts, title, }) => {
    const router = useRouter()
    const [activeCategory, setCategory] = useState("")

    const params = { slug: router.query.slug, }
    const { data, error, } = useSWR(GET_PRODUCTS_BY_CATEGORY_SLUG, fetcher(params), { initialData: initProducts, })

    const toggleCategory = (slug: string) => () => {
        if (activeCategory === slug) setCategory("")
        else setCategory(slug)
    }

    if (error) return <SwrError error={error} />
    if (!data) { return (<Loader h={645} />) }

    return (
        <CategoryPageList
            toggleCategory={toggleCategory}
            activeCategory={activeCategory}
            title={title}
            products={data}
        />
    )
}

export default CategoryPageListContainer
