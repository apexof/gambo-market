export function haveItemInCart(cart, id) {
    const el = cart.find(item => item.id === id)
    return el ? el.quantity : 0
}

export function haveItemInWishList(wishList, id) {
    const result = wishList.find(item => item.id === id)
    return result
}