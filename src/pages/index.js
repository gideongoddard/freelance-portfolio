import React from "react"
import Layout from "../components/Layout/Layout"
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
    </Layout>
  )
}