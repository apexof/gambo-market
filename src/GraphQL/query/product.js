import { gql, } from "@apollo/client"

export const GET_PRODUCT_BY_ID = gql`
query GET_PRODUCT_BY_ID ($where: ProductWhereUniqueInput!) {    
    product(where: $where){
        title
        id
        price
        oldPrice
        available
        discount
        weight
        category {name}
        img{url}
    }
}
`

export const GET_ALL_PRODUCT_IDS = gql`
    query GET_ALL_PRODUCT_IDS  {    
        products{ 
            id
        }
    }
`
