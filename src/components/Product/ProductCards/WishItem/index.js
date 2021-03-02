import { connect, } from "react-redux"
import Component from "./WishItem"
import { removeFromWishList, } from "../../../../store/AC"

const mapDispatchToProps = { removeFromWishList, }

const ConnectedComponent = connect(
    null, mapDispatchToProps
)(Component)

export default ConnectedComponent
