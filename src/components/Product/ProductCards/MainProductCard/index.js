import { connect } from "react-redux"
import Component from "./MainProductCard"
import { addToCart } from "../../../../store/AC"

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = {
    addToCart
}

const ConnectedComponent = connect(
    null, mapDispatchToProps
)(Component)

export default ConnectedComponent