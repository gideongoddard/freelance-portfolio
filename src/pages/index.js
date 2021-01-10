import React from "react"
import Gideon from "../components/Gideon/Gideon"
import Layout from "../components/Layout/Layout"
import ProjectSummary from "../components/ProjectSummary/ProjectSummary"
import ServiceSummary from "../components/ServiceSummary/ServiceSummary"
import Testimonial from "../components/Testimonial/Testimonial"
// import HomeStyles from "./index.module.css"
import Title from "../components/Title/Title"

export default function Home() {
  return (
    <Layout>
      <Title
        title="Outstanding websites that deliver results"
        subtitle="I help your business achieve its online goals"
        button={true}
        buttonType="accent"
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
    </Layout>
  )
}