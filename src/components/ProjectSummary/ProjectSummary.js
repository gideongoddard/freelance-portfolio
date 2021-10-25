import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Button from "../Button/Button"
import * as PSStyles from "./ProjectSummary.module.css"

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

Project.propTypes = {
    href: PropTypes.string.isRequired,
    imgSrc: PropTypes.object.isRequired,
    imgAlt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

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
                                perfectionValet: file(relativePath: {eq: "images/projects/perfectionvalet.png"}) {
                                    childImageSharp {
                                        fluid(maxWidth: 900, quality: 72) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                caplinSolar: file(relativePath: {eq: "images/projects/caplinsolar.png"}) {
                                    childImageSharp {
                                        fluid(maxWidth: 900, quality: 72) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                paulaabbey: file(relativePath: {eq: "images/projects/paula-abbey.png"}) {
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
                                name="Perfection Valet"
                                href="https://www.perfectiondetailing.co.uk"
                                imgSrc={data.perfectionValet.childImageSharp.fluid}
                                imgAlt="Perfection Valet website"
                            />
                            <Project
                                name="Paula Abbey Counselling & Psychotherapy"
                                href="https://paulaabbey.co.uk"
                                imgSrc={data.paulaabbey.childImageSharp.fluid}
                                imgAlt="Paula Abbey Counselling & Psychotherapy website"
                            />
                            <Project
                                name="Caplin Solar"
                                href="https://caplinsolar.co.uk"
                                imgSrc={data.caplinSolar.childImageSharp.fluid}
                                imgAlt="Caplin Solar website"
                            />
                            </>
                        )}
                    />
                </div>
                <div className={PSStyles.buttonContainer}>
                    <Button to="/projects/" colour="neutral" type="internal">View my recent projects</Button>
                </div>
            </div>
        </section>
    )
}