import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const setActiveMenuEl = Component => props => {
    const router = useRouter()
    const [activeMenuEl, setActiveMenuEl] = useState(null);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleScroll = () => {
        if (router.pathname !== "/") return null;
        const titleNodes = document.getElementsByClassName("market-section");
        let min = null;
        let index = -1;
        for (let i = 0; i < titleNodes.length; i++) {
            const topOffset = titleNodes[i].getBoundingClientRect().top;
            if (topOffset < 190) {
                if (!min || (topOffset > min)) {
                    min = topOffset;
                    index = i;
                }
            }
        }
        if (index > -1) {
            setActiveMenuEl(titleNodes[index].id)
        } else {
            setActiveMenuEl(null)
        }
    }
    return (
        <Component activeMenuEl={activeMenuEl}  {...props} />
    )
}

export default setActiveMenuEl