import React, { useState } from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as HeaderStyles from "./Header.module.css"

export default function Header() {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <header className={HeaderStyles.header}>
            <div className={HeaderStyles.navContainer}>
                <Link className={HeaderStyles.logo} to="/">
                    <StaticQuery
                        query={graphql`
                            query {
                                file(relativePath: {eq: "images/logo.png"}) {
                                    childImageSharp {
                                        fixed(width: 200, quality: 72) {
                                            ...GatsbyImageSharpFixed_noBase64
                                        }
                                    }
                                }
                            }
                        `}
                        render={data => (
                            <Img fixed={data.file.childImageSharp.fixed} alt="Logo" />
                        )}
                    />
                </Link>
                <div className={HeaderStyles.toggle} navopen={navOpen} onClick={() => setNavOpen(!navOpen)} onKeyPress={() => setNavOpen(!navOpen)} aria-label="Main menu" role="button" tabIndex={0}>
                    <div className={navOpen ? `${HeaderStyles.hamburgerOpen}` : `${HeaderStyles.hamburger}`}></div>
                </div>
                <nav className={HeaderStyles.nav} style={{right: navOpen ? "0" : "-100%"}}>
                    <Link activeStyle={{color: "var(--primary-700)"}} to="/">Home</Link>
                    <Link activeStyle={{color: "var(--primary-700)"}} to="/services/">Services</Link>
                    <Link activeStyle={{color: "var(--primary-700)"}} to="/projects/">Projects</Link>
                    <Link activeStyle={{color: "var(--primary-700)"}} to="/about/">About</Link>
                    <Link activeStyle={{color: "var(--primary-700)"}} to="/hire-me/">Hire me</Link>
                </nav>
            </div>
        </header>
    )
}