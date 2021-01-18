import React from "react"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import ProjectsStyles from "./projects.module.css"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Project = props => (
    <div className={ProjectsStyles.project}>
        <div className={ProjectsStyles.txtCol}>
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                <h2>{props.name}</h2>
            </a>
            {props.children}
        </div>
        <div className={ProjectsStyles.imgCol}>
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                <Img fluid={props.imgSrc} alt={props.imgAlt} className={ProjectsStyles.projectImg} />
            </a>
        </div>
    </div>
)

export default function Projects() {
    return (
        <Layout>
            <Title
                title="Projects"
                subtitle="Take a look at some of my recent work"
            />
            <section className={ProjectsStyles.section}>
                <div className={ProjectsStyles.projectsContainer}>
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
                            >
                                <p>Kibworth Osteopaths & Pilates were looking to establish a more marketing focused website for channeling traffic to from search engine results and a Google My Business profile.</p>
                                <p>Together, we worked on creating a site that provides its users with everything they need to know about making a booking, whilst giving the business a focus for channeling enquiries.</p>
                            </Project>
                            <Project
                                name="Caplin Solar"
                                href="https://caplinsolar.co.uk"
                                imgSrc={data.caplinSolar.childImageSharp.fluid}
                                imgAlt="Caplin Solar website"
                            >
                                <p>Caplin Solar were experiencing some reliability and performance issues with their website and were keen to rebuild and restructure it to improve these areas.</p>
                                <p>We worked to rebuild their WordPress website using the Gatsby framework, improving performance and reliability and creating a clean and lean codebase to build on.</p>
                            </Project>
                            <Project
                                name="Income Tax Calculator"
                                href="https://gideongoddard.github.io/tax-calculator"
                                imgSrc={data.taxCalculator.childImageSharp.fluid}
                                imgAlt="Income Tax Calculator website"
                            >
                                <p></p>
                            </Project>
                            </>
                        )}
                    />
                </div>
            </section>
        </Layout>
    )
}