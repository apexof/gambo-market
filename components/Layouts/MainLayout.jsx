import React from 'react'
import Footer from '../Footer'
import CommonHead from './CommonHead'
import Header from '../Header'

export default function MainLayout({ children }) {
    return (
        <div>
            <CommonHead />
            <Header />
            {children}
            <Footer />
        </div>
    )
}
