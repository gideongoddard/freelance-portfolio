import React from "react"
import HeaderStyles from "./Header.module.css"
import { Link } from "gatsby"

export default function Header() {
    return (
        <header className={HeaderStyles.header}>
            <nav className={HeaderStyles.nav}>
                <Link activeStyle={{color: "var(--accent-500)"}} to="/">Home</Link>
                <Link activeStyle={{color: "var(--accent-500)"}} to="/services">Services</Link>
                <Link activeStyle={{color: "var(--accent-500)"}} to="/design-system">Design System</Link>
            </nav>
        </header>
    )
}