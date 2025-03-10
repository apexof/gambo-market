import { connect } from "react-redux"
import Component from "./CartList"

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = {}

const ConnectedComponent = connect(
    mapStateToProps, mapDispatchToProps
)(Component)

export default ConnectedComponent