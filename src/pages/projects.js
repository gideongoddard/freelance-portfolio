import React from "react"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import ProjectsStyles from "./projects.module.css"

const Project = props => (
    <div className={ProjectsStyles.project}>

    </div>
)

export default function Projects() {
    return (
        <Layout>
            <Title
                title="Projects"
                subtitle="Take a look at some of my recent work"
            />
        </Layout>
    )
}