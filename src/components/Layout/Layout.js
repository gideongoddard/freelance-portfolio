import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import "./GlobalStyles.css"

export default function Layout({children}) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}