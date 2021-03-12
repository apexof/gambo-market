export const defaultFields = `
    title
    id
    price
    oldPrice
    available
    discount
    weight
    slug
    images {
        lqip: url(transformation: {image: {resize: {height: 30, width: 30}}})
        url
        width
        height
    }
`

export const GET_PRODUCT_BY_SLUG = `
query GET_PRODUCT_BY_SLUG ($slug: String) {    
    product(where: {slug: $slug}){
        ${defaultFields}
    }
}
`

export const GET_PRODUCTS_BY_CATEGORY_SLUG = `
query GET_PRODUCTS_BY_CATEGORY_SLUG ($slug: String) {    
    products(where: {category: {slug: $slug}}) {
        ${defaultFields}
        category {name}
    }
}
`

export const GET_LAST_PRODUCTS = `
query GET_LAST_PRODUCTS {
    products(orderBy: createdAt_DESC, first: 6) {
        ${defaultFields}
    }
  }
`

export const GET_MAX_DISCOUNT_PRODUCTS = `
query GET_MAX_DISCOUNT_PRODUCTS {
    products(orderBy: discount_DESC, first: 6) {
        ${defaultFields}
    }
  }
`

export const GET_TOP_PRODUCTS = `
query GET_TOP_PRODUCTS {
    products(orderBy: price_DESC, first: 6) {
        ${defaultFields}
    }
  }
`

export const GET_ALL_PRODUCT_SLUGS = `
    query GET_ALL_PRODUCT_SLUGS  {    
        products{ 
            slug
        }
    }
`

export const getFilteredProducts = ({ slug, price, discount, available, }) => `
query {    
    products(where: {
        category: {slug_starts_with: "${slug}",}
        price_gte: ${price.min}, ${price.max ? `price_lte: ${price.max}` : ""}
        discount_gte: ${discount.min}, ${discount.max ? `discount_lte: ${discount.max}` : ""}
        ${available !== null ? `available: ${available}` : ""}
    }) {
        ${defaultFields}
    }
}
`
