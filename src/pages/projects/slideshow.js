import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import Carousel from "../../components/Carousel/Carousel"

export default function Slideshow({ data }) {

    const images = [
        {name: "img1", path: data.img1.childImageSharp.fluid, alt: "Greece"},
        {name: "img2", path: data.img2.childImageSharp.fluid, alt: "Italy"},
        {name: "img3", path: data.img3.childImageSharp.fluid, alt: "Germany"},
        {name: "img4", path: data.img4.childImageSharp.fluid, alt: "France"},
        {name: "img5", path: data.img5.childImageSharp.fluid, alt: "Norway"},
        {name: "img6", path: data.img6.childImageSharp.fluid, alt: "New Zealand"},
    ]
    
    return (
        <Layout>
            <Carousel images={images} />
        </Layout>
    )
}

export const query = graphql`
    query {
        img1: file(relativePath: {eq: "images/greece.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        img2: file(relativePath: {eq: "images/italy.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        img3: file(relativePath: {eq: "images/germany.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        img4: file(relativePath: {eq: "images/france.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        img5: file(relativePath: {eq: "images/norway.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        img6: file(relativePath: {eq: "images/new-zealand.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`