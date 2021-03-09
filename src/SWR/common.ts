import { gql, } from "@apollo/client"
import { apolloClient, } from "../GraphQL"

export const fetcher = (key) => async (query) => {
    const { data, } = await apolloClient.query({ query: gql(query), })

    return data[key]
}
