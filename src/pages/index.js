import React from "react"
import Layout from "../components/Layout/Layout"
import HomeStyles from "./index.module.css"
import Button from "../components/Button/Button"

export default function Home() {
  return (
    <Layout>
      <section className={HomeStyles.heroSection}>
        <h2>Design. Build. Improve.</h2>
        <h1>I create beautiful websites your users will love</h1>
        <Button type="primary" to="/">Make it happen</Button>
      </section>
    </Layout>
  )
}