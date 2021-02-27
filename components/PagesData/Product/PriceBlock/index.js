import { connect } from "react-redux"
import Component from "./PriceBlock"
import { addToCart } from "../../../../store/AC"

const mapDispatchToProps = {
    addToCart
}

const ConnectedComponent = connect(
    null, mapDispatchToProps
)(Component)

export default ConnectedComponent