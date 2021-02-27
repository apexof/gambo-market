import { connect } from "react-redux"
import Component from "./CartControls"
import { addToCart, removeFromCart, setCountOfProducts } from "../../../../store/AC"

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = {
    addToCart,
    removeFromCart,
    setCountOfProducts
}

const ConnectedComponent = connect(
    mapStateToProps, mapDispatchToProps
)(Component)

export default ConnectedComponent