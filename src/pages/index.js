import React from "react"
import Layout from "../components/Layout/Layout"
import HomeStyles from "./index.module.css"
import Button from "../components/Button/Button"

export default function Home() {
  return (
    <Layout>
      <section className={HomeStyles.heroSection}>
        <h2>Build in progress...</h2>
        <h1>Why not check out the site's design system?</h1>
        <Button type="primary" to="/design-system">Take a look</Button>
      </section>
    </Layout>
  )
}