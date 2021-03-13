import React from "react"
import Head from "next/head"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function MainLayout({ title = "Gambo", }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
    )
}
