import { connect, } from "react-redux"
import Component from "./MainProductCard"
import { addToCart, } from "../../../../store/AC"

const mapDispatchToProps = { addToCart, }

const ConnectedComponent = connect(
    null, mapDispatchToProps
)(Component)

export default ConnectedComponent
