import useSWR from "swr"
import { gql, } from "@apollo/client"
import { apolloClient, GET_ALL_CATEGORIES, } from "../GraphQL"

export function useCategories() {
    const { data, error, } = useSWR(GET_ALL_CATEGORIES, fetcher)

    return { data, error, }
}

const fetcher = async (query) => {
    const { data, } = await apolloClient.query({ query: gql(query), })

    return data
}
