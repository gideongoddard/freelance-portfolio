import React, { useState } from "react"
import SlideshowStyles from "./slideshow.module.css"
import Layout from "../../components/Layout/Layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"

export default function Slideshow() {
    const data = useStaticQuery(graphql`
        query {
            img1: file(relativePath: {eq: "images/person-on-pier.jpeg"}) {
                childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            img2: file(relativePath: {eq: "images/autumn-road.jpeg"}) {
                childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            img3: file(relativePath: {eq: "images/bench-under-tree.jpeg"}) {
                childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            img4: file(relativePath: {eq: "images/empty-pier.jpeg"}) {
                childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            img5: file(relativePath: {eq: "images/hilltop-bench.jpeg"}) {
                childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            img6: file(relativePath: {eq: "images/flowers.jpeg"}) {
                childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const images = [
        {name: "img1", path: data.img1.childImageSharp.fluid, alt: "Person sitting on the end of a pier with mountains in the background"},
        {name: "img2", path: data.img2.childImageSharp.fluid, alt: "A long straight road framed by trees with autumnal leaves"},
        {name: "img3", path: data.img3.childImageSharp.fluid, alt: "A bench under the branches of a tree with fog in the background"},
        {name: "img4", path: data.img4.childImageSharp.fluid, alt: "A pier leading "},
        {name: "img5", path: data.img5.childImageSharp.fluid, alt: ""},
        {name: "img6", path: data.img6.childImageSharp.fluid, alt: ""},
    ]

    const [imageIndex, setImageIndex] = useState(0);
    
    return (
        <Layout>
            <div className={SlideshowStyles.main}>
                <div className={SlideshowStyles.iconContainer}>
                    <FontAwesomeIcon style={{display: imageIndex === 0 ? "none" : "block"}} className={SlideshowStyles.leftIcon} icon={faChevronCircleLeft} onClick={() => setImageIndex(imageIndex - 1)} />
                    <FontAwesomeIcon style={{display: imageIndex === (images.length - 1) ? "none" : "block"}} className={SlideshowStyles.rightIcon} icon={faChevronCircleRight} onClick={() => setImageIndex(imageIndex + 1)} />
                </div>
                <div className={SlideshowStyles.imgContainer}>
                    <Img fluid={images[imageIndex].path} alt={images[imageIndex].alt} />
                </div>
            </div>
        </Layout>
    )
}