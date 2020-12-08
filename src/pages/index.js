import React from "react"
import Layout from "../components/Layout/Layout"
// import HomeStyles from "./index.module.css"
import Title from "../components/Title/Title"

export default function Home() {
  return (
    <Layout>
      <Title
        title="Check out the design system (also in progress)"
        subtitle="Build in progress..."
        button={true}
        buttonType="accent"
        buttonTo="/design-system"
        buttonText="Take a sneak peak"
      />
    </Layout>
  )
}