import React from "react"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import Form from "../components/Form/Form"

export default function HireMe() {
    return (
        <Layout>
            <Title title="Work with me" subtitle="Let's create an outstanding website for your business to unlock your potential on the web" />
            <Form heading="Send me a message" />
        </Layout>
    )
}