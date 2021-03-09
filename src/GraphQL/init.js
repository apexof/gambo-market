import { ApolloClient, InMemoryCache, createHttpLink, } from "@apollo/client"
import { setContext, } from "@apollo/client/link/context"
import { API, apiToken, } from "../config/path"

const defaultOptions = {
    watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
    },
    query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
    },
}

const httpLink = createHttpLink({ uri: API, })

const authLink = setContext((_, { headers, }) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${apiToken}`,
        },
    }
})

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
    defaultOptions,
})
