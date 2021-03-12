import { SortSelectItem, SortType, } from "../../../../types"

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

export const sortSelectItems: SortSelectItem[] = [
    {
        type: SortType.priceLowToHigh,
        title: "Price - Low to High",
    },
    {
        type: SortType.priceHighToLow,
        title: "Price - High to Low",
    },
    {
        type: SortType.alphabetical,
        title: "Alphabetical",
    },
    {
        type: SortType.savingHighToLow,
        title: "Saving - High to Low",
    },
    {
        type: SortType.savingLowToHigh,
        title: "Saving - Low to High",
    },
    {
        type: SortType.discountHighToLow,
        title: "% Off - High to Low",
    }
]
