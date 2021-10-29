import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import Layout from "../../components/Layout/Layout"
import * as SlideshowStyles from "./slideshow.module.css"

function Gallery({ data }) {
    const [index, setIndex] = useState(0);
    const images = [
        {name: "img1", path: data.img1.childImageSharp.fluid, alt: "Greece"},
        {name: "img2", path: data.img2.childImageSharp.fluid, alt: "Italy"},
        {name: "img3", path: data.img3.childImageSharp.fluid, alt: "Germany"},
        {name: "img4", path: data.img4.childImageSharp.fluid, alt: "France"},
        {name: "img5", path: data.img5.childImageSharp.fluid, alt: "Norway"},
        {name: "img6", path: data.img6.childImageSharp.fluid, alt: "New Zealand"},
    ]

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handlePreviousClick() {
        setIndex(index - 1);
    }

    let currentImage = images[index];

    return (
        <Layout>
            <div className={SlideshowStyles.main}>
                <div className={SlideshowStyles.iconContainer}>
                    {index > 0 && <FontAwesomeIcon style={{fontSize: "var(--type-xl)"}} className={SlideshowStyles.leftIcon} icon={faChevronCircleLeft} onClick={() => handlePreviousClick()} />}
                    {index < images.length - 1 && <FontAwesomeIcon style={{fontSize: "var(--type-xl)"}} className={SlideshowStyles.rightIcon} icon={faChevronCircleRight} onClick={() => handleNextClick()} />}
                </div>
                <div className={SlideshowStyles.imgContainer}>
                    <Img fluid={currentImage.path} alt={currentImage.alt} />
                </div>
            </div>
        </Layout>
    )
}

export default Gallery

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