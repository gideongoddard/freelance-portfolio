import React from "react"
import HeaderStyles from "./Header.module.css"
import { Link } from "gatsby"

export default function Header() {
    return (
        <header className={HeaderStyles.header}>
            <nav className={HeaderStyles.nav}>
                <Link activeStyle={{color: "var(--accent-500)"}} to="/">Home</Link>
                <Link activeStyle={{color: "var(--accent-500)"}} to="/services">Services</Link>
                <Link activeStyle={{color: "var(--accent-500)"}} to="/projects">Projects</Link>
                <Link activeStyle={{color: "var(--accent-500)"}} to="/about">About</Link>
                <Link className={HeaderStyles.btnLink} to="/hire-me">Hire me</Link>
            </nav>
        </header>
    )
}