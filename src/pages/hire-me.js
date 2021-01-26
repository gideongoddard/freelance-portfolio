import React from "react"
import HMStyles from "./hire-me.module.css"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import Form from "../components/Form/Form"
import Button from "../components/Button/Button"

export default function HireMe() {
    return (
        <Layout>
            <Title title="Work with me" subtitle="Let's create an outstanding website for your business to unlock your potential on the web" />
            <section className={HMStyles.section}>
                <div className={HMStyles.container}>
                    <div className={HMStyles.intro}>
                        <h2>Schedule a call</h2>
                        <p>You can arrange an introductory telephone conversation for you to find out a bit more about me and for me to find out more about your business, your objectives and what you need.</p>
                    </div>
                    <div className={HMStyles.detail}>
                        <h3>Here's what we'll cover:</h3>
                        <ul>
                            <li>A brief background to your business</li>
                            <li>Where your business is at right now</li>
                            <li>Your objectives for your business</li>
                            <li>Your existing web presence</li>
                        </ul>
                        <p>After the call, I'll spend some time creating some recommendations based on what we covered before we talk again to make a detailed plan of action.</p>
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