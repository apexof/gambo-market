import React, { FC, ReactNode, } from "react"
import Footer from "../Footer"
import CommonHead from "./CommonHead"
import Header from "../Header"

interface IProps {
    children: ReactNode
}
const MainLayout: FC<IProps> = ({ children, }) => {
    return (
        <div>
            <CommonHead />
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
