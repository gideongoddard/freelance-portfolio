import React, { useState } from "react"
import CarouselStyles from "./Carousel.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"

export default function Carousel(props) {

    const [imageIndex, setImageIndex] = useState(0)

    const images = props.images

    return (
        <div className={CarouselStyles.main}>
            <div className={CarouselStyles.iconContainer}>
                <FontAwesomeIcon style={{fontSize: "var(--type-xl)", display: imageIndex === 0 ? "none" : "block"}} className={CarouselStyles.leftIcon} icon={faChevronCircleLeft} onClick={() => setImageIndex(imageIndex - 1)} />
                <FontAwesomeIcon style={{fontSize: "var(--type-xl)", display: imageIndex === (images.length - 1) ? "none" : "block"}} className={CarouselStyles.rightIcon} icon={faChevronCircleRight} onClick={() => setImageIndex(imageIndex + 1)} />
            </div>
            <div className={CarouselStyles.imgContainer}>
                <Img fluid={images[imageIndex].path} alt={images[imageIndex].alt} />
            </div>
        </div>
    )
}