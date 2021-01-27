import React from "react"
import FooterStyles from "./Footer.module.css"

export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className={FooterStyles.footer}>
            <div className={FooterStyles.footerBottom}>
                <p>Website built using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a> and hosted on <a href="https://www.netlify.com/" target="_blank" rel="noreferrer noopener">Netlify</a></p>
                <p>{year} &#169; Gideon Goddard <span role="img" aria-label="computer emoji">💻</span> <span role="img" aria-label="sparkle emoji">✨</span></p>
            </div>
        </footer>
    )
}