import React from "react"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import AboutStyles from "./about.module.css"
import Gideon from "../components/Gideon/Gideon"
import Button from "../components/Button/Button"
import { Helmet } from "react-helmet"
import MetaImage from "../images/meta-image.png"

const Client = props => (
    <div className={AboutStyles.client}>
        <span className={AboutStyles.item}>{props.item}</span>
        <h4>{props.heading}</h4>
        <p>{props.description}</p>
    </div>
)

export default function About() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About | Gideon Goddard, Web Developer</title>
                <meta name="title" content="About | Gideon Goddard, Web Developer" />
                <meta name="description" content="A freelance web developer, digital strategist & consultant. I can help you and your business succeed online." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://gideongoddard.co.uk/about" />
                <meta property="og:title" content="About | Gideon Goddard, Web Developer" />
                <meta property="og:description" content="A freelance web developer, digital strategist & consultant. I can help you and your business succeed online." />
                <meta property="og:image" content={MetaImage} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://gideongoddard.co.uk/about" />
                <meta property="twitter:title" content="About | Gideon Goddard, Web Developer" />
                <meta property="twitter:description" content="A freelance web developer, digital strategist & consultant. I can help you and your business succeed online." />
                <meta property="twitter:image" content={MetaImage} />

                <html lang="en"></html>
            </Helmet>
            <Title title="Gideon Goddard" subtitle="Web Developer & Digital Consultant" />
            <section className={AboutStyles.backgroundSection}>
                <div className={AboutStyles.narrowContainer}>
                    <h4>I'm a professional freelance web developer & digital consultant based just outside Leicester, UK.</h4>
                    <h3>My background</h3>
                    <p>I have over a decade of experience in working on web projects for businesses at all stages - from start-ups to some of the world's biggest brands and lots in between!</p>
                    <p>Before becoming a web developer, I worked for digital agencies as a Project Manager for many years, working very closely with business owners, marketing managers and more to deliver website projects to meet their business objectives.</p>
                    <p>Training as a web developer taught me <em>how</em> to design and build websites but my time working as a Project Manager is what taught me <em>what</em> to create and <em>why</em>.</p>
                    <p><strong>That understanding is why I can ensure that any solution I recommend will be tailored to match your goals.</strong></p>
                </div>
            </section>
            <section className={AboutStyles.clientSection}>
                <div className={AboutStyles.container}>
                    <h3>Who I work with</h3>
                    <div className={AboutStyles.clientContainer}>
                        <Client
                            item="01"
                            heading="Start-ups"
                            description="I work with newly started businesses that are looking to launch themselves on the web for the first time. Crafting a business's first website or online shop with a blank slate is a hugely exciting time that I love to be a part of."
                        />
                        <Client
                            item="02"
                            heading="Established companies"
                            description="If your business has an existing website that you think could be improved, I'd be thrilled to hear from you. I excel in getting deep into analysing where a business's existing web presence is performing well and where there are areas for improvement."
                        />
                    </div>
                </div>
            </section>
            <Gideon>
                <p>There's a lot that goes into a website project and getting it all right isn't easy - and neither is choosing who to work with to make it happen!</p>
                <p>I've got the industry experience needed to know how to get your project right and I take a lot of pride in the work that I do so you can be sure you're in good hands.</p>
                <Button colour="primary" to="/hire-me" type="internal">Hire me today</Button>
            </Gideon>
        </Layout>
    )
}