import React from "react"
import PSStyles from "./ProjectSummary.module.css"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Project = props => (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
        <div className={PSStyles.project}>
            <h3>{props.name}</h3>
            <Img fluid={props.imgSrc} alt={props.imgAlt} />
        </div>
    </a>
)

export default function ProjectSummary() {
    return (
        <section className={PSStyles.section}>
            <div className="container">
                <h2>Recent Work</h2>
                <p>Take a look at some of my recent projects</p>
                <div className={PSStyles.projectsContainer}>
                    <StaticQuery
                        query={graphql`
                            query {
                                kibworthOsteopaths: file(relativePath: {eq: "images/kibworthosteopaths.png"}) {
                                    childImageSharp {
                                        fluid(maxWidth: 900, quality: 72) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                caplinSolar: file(relativePath: {eq: "images/caplinsolar.png"}) {
                                    childImageSharp {
                                        fluid(maxWidth: 900, quality: 72) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                taxCalculator: file(relativePath: {eq: "images/tax-calc-results.png"}) {
                                    childImageSharp {
                                        fluid(maxWidth: 900, quality: 72) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        `}
                        render={data => (
                            <>
                            <Project 
                                name="Kibworth Osteopaths"
                                href="https://kibworthosteopaths.co.uk"
                                imgSrc={data.kibworthOsteopaths.childImageSharp.fluid}
                                imgAlt="Kibworth Osteopaths & Pilates website"
                            />
                            <Project
                                name="Caplin Solar"
                                href="https://caplinsolar.co.uk"
                                imgSrc={data.caplinSolar.childImageSharp.fluid}
                                imgAlt="Caplin Solar website"
                            />
                            <Project
                                name="Income Tax Calculator"
                                href="https://gideongoddard.github.io/tax-calculator"
                                imgSrc={data.taxCalculator.childImageSharp.fluid}
                                imgAlt="Income Tax Calculator website"
                            />
                            </>
                        )}
                    />
                </div>
            </div>
        </section>
    )
}