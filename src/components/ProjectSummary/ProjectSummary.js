import React from "react"
import PSStyles from "./ProjectSummary.module.css"
import Button from "../Button/Button"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Project = props => (
    <div className={PSStyles.project}>
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            <Img fluid={props.imgSrc} alt={props.imgAlt} className={PSStyles.projectImg} />
        </a>
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            <h3>{props.name}</h3>
        </a>
    </div>
)

export default function ProjectSummary() {
    return (
        <section className={PSStyles.section}>
            <div className="container">
                <h2>Recent Work</h2>
                <p>Take a look at some of my latest projects</p>
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
                                name="Kibworth Osteopaths & Pilates"
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
                <div className={PSStyles.buttonContainer}>
                    <Button to="/projects" colour="neutral" type="internal">View my recent projects</Button>
                </div>
            </div>
        </section>
    )
}