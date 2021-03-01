import React, { useState, useEffect, } from "react"

const shadowOnScroll = ({ Component, offset, }) => props => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleScroll = () => {
        // console.log(element.scrollY)
        setScrolled(window.scrollY > offset)
    }
    return (
        <Component scrolled={scrolled} {...props} />
    )
}

export default shadowOnScroll
