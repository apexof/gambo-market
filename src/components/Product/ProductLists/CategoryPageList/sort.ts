import { SortType, } from "../../../../types"

type SortFunctions = {
    [key in keyof typeof SortType]: (a: Product, b: Product) => number
}

export const sortFN: SortFunctions = {
    alphabetical: (a, b) => a.title.localeCompare(b.title),
    priceLowToHigh: (a, b) => a.price - b.price,
    priceHighToLow: (a, b) => b.price - a.price,
    discountHighToLow: (a, b) => b.discount - a.discount,
    savingLowToHigh: (a, b) => (a.oldPrice - a.price) - (b.oldPrice - b.price),
    savingHighToLow: (a, b) => (b.oldPrice - b.price) - (a.oldPrice - a.price),
}
