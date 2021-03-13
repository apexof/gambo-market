import Component from "./Header"
import shadowOnScroll from "../../HOC/shadowOnScroll"

const ShadowedComponent = shadowOnScroll({
    Component,
    offset: 40,
})

export default ShadowedComponent
