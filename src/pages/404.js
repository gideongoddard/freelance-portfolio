import React from "react"
import Layout from "../components/Layout/Layout"

export default function PageNotFound() {
    return (
        <Layout>
            <div style={{height: "65vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h1 style={{textAlign: "center"}}>Page not found</h1>
            </div>
        </Layout>
    )
}