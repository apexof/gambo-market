import React, { FC, } from "react"
import Head from "next/head"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface IProps {
    title?: string
}

const CommonHead: FC<IProps> = ({ title = "Gambo", }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default CommonHead
