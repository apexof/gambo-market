import { connect } from "react-redux"
import Component from "./WishIcon"
import { addToWishList, removeFromWishList } from "../../../store/AC"

function mapStateToProps(state) {
    return { wishList: state.wishList, }
}

const mapDispatchToProps = {
    addToWishList,
    removeFromWishList,
}

const ConnectedComponent = connect(
    mapStateToProps, mapDispatchToProps
)(Component)

export default ConnectedComponent
