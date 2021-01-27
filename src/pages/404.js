import React from "react"
import Layout from "../components/Layout/Layout"
import { Helmet } from "react-helmet"
import PNFStyles from "./404.module.css"

export default function PageNotFound() {
    return (
        <Layout>
            <Helmet>
                <title>Page not found | Gideon Goddard, Web Developer</title>
                <html lang="en"></html>
            </Helmet>
            <section className={PNFStyles.container}>
                <h1>Uh oh...</h1>
                <p>The page you're looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
            </section>
        </Layout>
    )
}