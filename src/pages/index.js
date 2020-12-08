import React from "react"
import Layout from "../components/Layout/Layout"
import HomeStyles from "./index.module.css"
import Button from "../components/Button/Button"

export default function Home() {
  return (
    <Layout>
      <section className={HomeStyles.heroSection}>
        <h2>Build in progress...</h2>
        <h1>Check out the evolving design system in the meantime</h1>
        <Button type="accent" to="/design-system">Take a sneak peak</Button>
      </section>
    </Layout>
  )
}