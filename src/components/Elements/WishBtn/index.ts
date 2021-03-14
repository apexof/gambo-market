import { connect, } from "react-redux"
import { State, } from "../../../types"
import Component from "./WishBtn"
import { addToWishList, removeFromWishList, } from "../../../store/AC"

const mapStateToProps = (state: State) => ({ wishList: state.wishList, })

const mapDispatchToProps = {
    addToWishList,
    removeFromWishList,
}

const ConnectedComponent = connect(
    mapStateToProps, mapDispatchToProps
)(Component)

export default ConnectedComponent
