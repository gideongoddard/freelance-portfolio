import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/Layout"
import Button from "../components/Button/Button"
import Form from "../components/Form/Form"
import Title from "../components/Title/Title"
import MetaImage from "../images/meta-image.png"
import * as HMStyles from "./hire-me.module.css"

export default function HireMe() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hire Me | Gideon Goddard, Web Developer</title>
                <meta name="title" content="Hire Me | Gideon Goddard, Web Developer" />
                <meta name="description" content="A freelance web developer, digital strategist & consultant. I can help you and your business succeed online." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://gideongoddard.co.uk/hire-me/" />
                <meta property="og:title" content="Hire Me | Gideon Goddard, Web Developer" />
                <meta property="og:description" content="A freelance web developer, digital strategist & consultant. I can help you and your business succeed online." />
                <meta property="og:image" content={MetaImage} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://gideongoddard.co.uk/hire-me/" />
                <meta name="twitter:title" content="Hire Me | Gideon Goddard, Web Developer" />
                <meta name="twitter:description" content="A freelance web developer, digital strategist & consultant. I can help you and your business succeed online." />
                <meta name="twitter:image" content={MetaImage} />

                <html lang="en"></html>
            </Helmet>
            <Title>
                <h1>Let's work <span className="highlight">together</span></h1>
                <h2>Work with me to create an outstanding website for your business and unlock your potential on the web. Get in touch today to start the conversation.</h2>
            </Title>
            <section className={HMStyles.section}>
                <div className={HMStyles.container}>
                    <div>
                        <h2>Schedule a call</h2>
                        <p>You can arrange an introductory phone call for you to find out a bit more about me and for me to find out more about how I can help you.</p>
                    </div>
                    <div className={HMStyles.detail}>
                        <h3>Here's what we'll cover:</h3>
                        <ul>
                            <li>A brief background to your business</li>
                            <li>Where your business is at right now</li>
                            <li>Your objectives for your business</li>
                            <li>Your existing web presence</li>
                        </ul>
                        <p>After the call, I'll spend some time creating some recommendations before we talk again to make a detailed plan of action.</p>
                    </div>
                    <div className={HMStyles.buttonContainer}>
                        <Button colour="primary" to="https://calendly.com/gideon-goddard/intro" type="external">Schedule a call</Button>
                    </div>
                </div>
            </section>
            <Form heading="Send me a message" intro="If you'd prefer to send me a message with some background about your business and what you're looking for then fill out the form below and I'll get back to you within 24 hrs." />
        </Layout>
    )
}