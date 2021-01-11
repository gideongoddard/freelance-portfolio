import React from "react"
import { Helmet } from "react-helmet"
import Form from "../components/Form/Form"
import Gideon from "../components/Gideon/Gideon"
import Layout from "../components/Layout/Layout"
import ProjectSummary from "../components/ProjectSummary/ProjectSummary"
import ServiceSummary from "../components/ServiceSummary/ServiceSummary"
import Testimonial from "../components/Testimonial/Testimonial"
// import HomeStyles from "./index.module.css"
import Title from "../components/Title/Title"
import MetaImage from "../images/meta-image.png"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gideon Goddard | Web Developer</title>
        <meta name="title" content="Gideon Goddard | Web Developer" />
        <meta name="description" content="A freelance web developer, digital strategist & consultant. I can help you and your business succeed online." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gideongoddard.co.uk/" />
        <meta property="og:title" content="Gideon Goddard | Web Developer" />
        <meta property="og:description" content="A freelance web developer, digital strategist & consultant. I can help you and your business succeed online." />
        <meta property="og:image" content={MetaImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gideongoddard.co.uk/" />
        <meta property="twitter:title" content="Gideon Goddard | Web Developer" />
        <meta property="twitter:description" content="A freelance web developer, digital strategist & consultant. I can help you and your business succeed online." />
        <meta property="twitter:image" content={MetaImage} />

        <html lang="en"></html>
      </Helmet>
      <Title
        title="Outstanding websites that deliver results"
        subtitle="I help your business achieve its online goals"
        button={true}
        buttonType="external"
        buttonStyle="accent"
        buttonTo="/#contact"
        buttonText="Let's get started"
      />
      <ServiceSummary />
      <ProjectSummary />
      <Gideon />
      <Testimonial
        quote="Gideon is amazing! His services and knowledge have helped my business grow really well. Gideon is patient, kind, helpful and incredibly talented. I cannot recommend him highly enough!"
        client="Emily Coombes, Kibworth Osteopaths & Pilates"
      />
      <Form />
    </Layout>
  )
}