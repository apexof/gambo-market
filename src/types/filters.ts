export enum SortType {
    alphabetical = "alphabetical",
    priceLowToHigh = "priceLowToHigh",
    priceHighToLow = "priceHighToLow",
    discountHighToLow = "discountHighToLow",
    savingLowToHigh = "savingLowToHigh",
    savingHighToLow = "savingHighToLow",
}

export type SetSort = ({ type: SortType, }) => void

export type SortSelectItem = {
    type: SortType,
    title: string,
}
