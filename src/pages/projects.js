import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/Layout"
import Button from "../components/Button/Button"
import Title from "../components/Title/Title"
import MetaImage from "../images/meta-image.png"
import { projects } from "../util/projects"
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
            <p>{props.intro1}</p>
            <p>{props.intro2}</p>
        </div>
    </div>
)

export default function Projects({ data }) {
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
                    {projects.slice(0).reverse().map(project => (
                        <Project
                            key={project.id}
                            name={project.name}
                            href={project.url}
                            imgSrc={data.allFile.edges.filter(obj => {return obj.node.name === project.imageName})[0].node.childImageSharp.fluid}
                            imgAlt={project.imgAlt}
                            intro1={project.intro1}
                            intro2={project.intro2}
                        />
                    ))}
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

export const query = graphql`
    query ProjectImages {
        allFile(filter: {relativeDirectory: {eq: "images/projects"}}) {
            edges {
                node {
                    id
                    name
                    childImageSharp {
                        fluid(maxWidth: 810, quality: 72) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`