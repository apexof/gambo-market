export const GET_ALL_CATEGORIES = `
query GET_ALL_CATEGORIES {
    categories (where: {products_some: {}}) {
        id
        name
        slug
        icon {
            url
        }
    }
}
`

export const GET_ALL_CATEGORIES_SLUG = `
query GET_ALL_CATEGORIES_SLUG {
    categories {
        slug
    }
}  
`
