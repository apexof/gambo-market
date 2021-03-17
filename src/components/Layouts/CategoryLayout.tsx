import React, { FC, ReactNode, } from "react"
import Footer from "../Footer"
import CommonHead from "./CommonHead.tsx"
import Header from "../Header"

interface IProps {
    children: ReactNode
}

const CategoryLayout: FC<IProps> = ({ children, }) => {
    return (
        <div>
            <CommonHead />
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default CategoryLayout
