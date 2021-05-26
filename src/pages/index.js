import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/Layout"
import Button from "../components/Button/Button"
import Form from "../components/Form/Form"
import Gideon from "../components/Gideon/Gideon"
import ProjectSummary from "../components/ProjectSummary/ProjectSummary"
import ServiceSummary from "../components/ServiceSummary/ServiceSummary"
import Testimonial from "../components/Testimonial/Testimonial"
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

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://gideongoddard.co.uk/" />
        <meta name="twitter:title" content="Gideon Goddard | Web Developer" />
        <meta name="twitter:description" content="A freelance web developer, digital strategist & consultant. I can help you and your business succeed online." />
        <meta name="twitter:image" content={MetaImage} />

        <html lang="en"></html>

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Gideon Goddard Digital",
              "image": "https://gideongoddard.co.uk/static/1454275122a69e490bddaa66430a4f88/a7dc7/logo.png",
              "@id": "",
              "url": "https://gideongoddard.co.uk",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "32 Garfield Park, Great Glen",
                "addressLocality": "Leicester",
                "postalCode": "LE8 9JY",
                "addressCountry": "GB"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              } 
            }
          `}
        </script>
      </Helmet>
      <Title
        button={true}
        buttonType="internal"
        buttonColour="accent"
        buttonTo="/hire-me/"
        buttonText="Let's get started"
      >
        <h1>Bringing you <span className="highlight">outstanding</span> websites that deliver results</h1>
        <h2>I help your business achieve its online goals by combining years of industry experience with a breadth and depth of knowledge and expertise to deliver the right solution for you.</h2>
      </Title>
      <ServiceSummary />
      <ProjectSummary />
      <Gideon>
        <h3>Hi, I'm Gideon.</h3>
        <p>I help businesses succeed online by creating websites that convert visits into enquiries and sales.</p>
        <Button type="internal" colour="primary" to="/hire-me/">Let's talk</Button>
      </Gideon>
      <Testimonial client="Emily Coombes, Kibworth Osteopaths & Pilates">
        <p>Gideon is amazing! His services and knowledge have helped my business grow really well. Gideon is patient, kind, helpful and incredibly talented. I cannot recommend him highly enough!</p>
      </Testimonial>
      <Form heading="Get in touch" intro="Tell me a little bit about your business and what you're looking for and I'll get back to you within 24 hrs. We can then arrange a chat to discuss how I can help, even if it’s just to offer some advice." />
    </Layout>
  )
}