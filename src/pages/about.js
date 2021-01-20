import React from "react"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import AboutStyles from "./about.module.css"

export default function About() {
    return (
        <Layout>
            <Title title="Gideon Goddard" subtitle="Web Developer & Digital Consultant" />
            <section className={AboutStyles.section}>
                <div className={AboutStyles.container}>
                    <h4>I'm a professional freelance web developer & digital consultant based just outside Leicester, UK.</h4>
                    <h3>My background</h3>
                    <p>I have over a decade of experience in working on web projects for businesses at all stages - from start-ups to some of the world's biggest brands and lots in between!</p>
                    <p>Before becoming a web developer, I worked for digital agencies as a Project Manager for many years, working very closely with business owners, marketing managers and more to deliver website projects to meet their business objectives.</p>
                    <p>Training as a web developer taught me <em>how</em> to design and build websites but my time working as a Project Manager is what taught me <em>what</em> to create and <em>why</em>.</p>
                    <p><strong>That understanding is why I can ensure that any solution I recommend will be tailored to match your goals.</strong></p>
                </div>
            </section>
        </Layout>
    )
}