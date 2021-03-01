import { connect } from "react-redux"
import Component from "./CartProductCard"
import { removeAllItemsFromCart } from "../../../../store/AC"

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = {
    removeAllItemsFromCart
}

const ConnectedComponent = connect(
    null, mapDispatchToProps
)(Component)

export default ConnectedComponent