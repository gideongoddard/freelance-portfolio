import React, { useState } from "react"
import HeaderStyles from "./Header.module.css"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"


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
                                        fixed(width: 80, quality: 72) {
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
                <div className={HeaderStyles.toggle} navOpen={navOpen} onClick={() => setNavOpen(!navOpen)}>
                    <div className={navOpen ? `${HeaderStyles.hamburgerOpen}` : `${HeaderStyles.hamburger}`}></div>
                </div>
                <nav className={HeaderStyles.nav} style={{right: navOpen ? "0" : "-100%"}}>
                    <Link activeStyle={{color: "var(--primary-600)"}} to="/">Home</Link>
                    <Link activeStyle={{color: "var(--primary-600)"}} to="/services">Services</Link>
                    <Link activeStyle={{color: "var(--primary-600)"}} to="/projects">Projects</Link>
                    <Link activeStyle={{color: "var(--primary-600)"}} to="/about">About</Link>
                    <Link activeStyle={{color: "var(--primary-600)"}} to="/hire-me">Hire me</Link>
                </nav>
            </div>
        </header>
    )
}