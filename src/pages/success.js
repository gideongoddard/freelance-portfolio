import React from "react"
import SuccessStyles from "./success.module.css"
import Button from "../components/Button/Button"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/Layout"

export default function Success() {
    return (
        <Layout>
            <Helmet>
                <title>Success | Gideon Goddard, Web Developer</title>

                <html lang="en"></html>

                <script>
                    {`
                        gtag('event', 'conversion', {'send_to': 'AW-415626096/ugDZCLuew_YBEPDml8YB'});
                    `}
                </script>
            </Helmet>
            <div className={SuccessStyles.container}>
                <div className={SuccessStyles.content}>
                    <h1>Thank you for your message</h1>
                    <p>I always aim to respond within 1 working day so I look forward to being in contact with you soon.</p>
                    <Button colour="primary" type="internal" to="/">Go to the home page</Button>
                </div>
            </div>
        </Layout>
    )
}