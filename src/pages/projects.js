import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/Layout"
import Button from "../components/Button/Button"
import Title from "../components/Title/Title"
import MetaImage from "../images/meta-image.png"
import * as ProjectsStyles from "./projects.module.css"

const Project = props => (
    <div className={ProjectsStyles.project}>
        <div className={ProjectsStyles.imgCol}>
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                <Img fluid={props.imgSrc} alt={props.imgAlt} className={ProjectsStyles.projectImg} />
            </a>
        </div>
        <div>
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                <h2>{props.name}</h2>
            </a>
            {props.children}
        </div>
    </div>
)

export default function Projects() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Projects | Gideon Goddard, Web Developer</title>
                <meta name="title" content="Projects | Gideon Goddard, Web Developer" />
                <meta name="description" content="Take a look at some of my recent work and find out how I can help you to start your own online success story." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://gideongoddard.co.uk/projects/" />
                <meta property="og:title" content="Projects | Gideon Goddard, Web Developer" />
                <meta property="og:description" content="Take a look at some of my recent work and find out how I can help you to start your own online success story." />
                <meta property="og:image" content={MetaImage} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://gideongoddard.co.uk/projects/" />
                <meta name="twitter:title" content="Projects | Gideon Goddard, Web Developer" />
                <meta name="twitter:description" content="Take a look at some of my recent work and find out how I can help you to start your own online success story." />
                <meta name="twitter:image" content={MetaImage} />

                <html lang="en"></html>
            </Helmet>
            <Title>
                <h1>Recent <span className="highlight">projects</span> to demonstrate my work</h1>
            </Title>
            <section className={ProjectsStyles.projectsSection}>
                <div className={ProjectsStyles.projectsContainer}>
                <StaticQuery
                        query={graphql`
                            query {
                                perfectionValet: file(relativePath: {eq: "images/perfectionvalet.png"}) {
                                    childImageSharp {
                                        fluid(maxWidth: 810, quality: 72) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                paulaAbbey: file(relativePath: {eq: "images/paula-abbey.png"}) {
                                    childImageSharp {
                                        fluid(maxWidth: 810, quality: 72) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                kibworthOsteopaths: file(relativePath: {eq: "images/kibworthosteopaths.png"}) {
                                    childImageSharp {
                                        fluid(maxWidth: 810, quality: 72) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                caplinSolar: file(relativePath: {eq: "images/caplinsolar.png"}) {
                                    childImageSharp {
                                        fluid(maxWidth: 810, quality: 72) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                taxCalculator: file(relativePath: {eq: "images/tax-calc-results.png"}) {
                                    childImageSharp {
                                        fluid(maxWidth: 810, quality: 72) {
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
                            >
                                <p>As someone with a love for cars, I wanted to work with Richard at Perfection Valet becuase his portfolio of some of the most significant cars on the planet is unrivalled.</p>
                                <p>Ths project was to modernise a 15 year old, non-responsive holding page to create something that can set the tone for building out a full site in future that showcases Perfection Valet's portfolio and services.</p>
                            </Project>
                            <Project
                                name="Paula Abbey Counselling & Psychotherapy"
                                href="https://paulaabbey.co.uk"
                                imgSrc={data.paulaAbbey.childImageSharp.fluid}
                                imgAlt="Paula Abbey Counselling & Psychotherapy website"
                            >
                                <p>This project was the launch of a brand new website for a new counselling & psychotherapy practice. The primary goal was to maximise enquiries from prospective clients.</p>
                                <p>We used nature and lanscape imagery to create a calming vibe, whilst also aiming to ensure that visitors to the site feel comfortable with Paula as well as confident in her expertise.</p>
                            </Project>
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
                                <p>A React app that calculates UK income tax based on annual income and country of residence (income tax in Scotland differs from the rest of the UK)</p>
                                <p>The app returns your income tax contribution based on these inputs but also provides a breakdown, explaining how much tax is paid on each portion of salary.</p>
                            </Project>
                            </>
                        )}
                    />
                </div>
            </section>
            <section className={ProjectsStyles.calloutSection}>
                <div className={ProjectsStyles.callout}>
                    <h3>Start your success story</h3>
                    <p>Let's get started on building your online success story. You can schedule a call or send me a message and we'll arrange to talk through how I can help you achieve your goals.</p>
                    <Button colour="primary" to="/hire-me/">Hire me today</Button>
                </div>
            </section>
        </Layout>
    )
}