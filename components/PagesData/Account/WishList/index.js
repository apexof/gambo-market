import { connect } from "react-redux"
import Component from "./WishList"

function mapStateToProps(state) {
    return {
        wishList: state.wishList
    }
}
const mapDispatchToProps = {
}

const ConnectedComponent = connect(
    mapStateToProps, mapDispatchToProps
)(Component)

export default ConnectedComponent