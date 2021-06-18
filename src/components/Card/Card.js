import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as CardStyles from "./Card.module.css"

function Card(props) {
    return (
        <div className={CardStyles.card}>
            <div className={CardStyles.imgContainer}>
                <Link to={props.linkTo}>
                    <img src={props.imgSrc} alt={props.imgAlt} />
                </Link>
            </div>
            <div className={CardStyles.txtContainer}>
                <Link to={props.linkTo}>
                    <h3>{props.heading}</h3>
                </Link>
                <p>{props.excerpt}</p>
                <Link to={props.linkTo}>{props.linkText}</Link>
            </div>
        </div>
    )
}

Card.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
}

export default Card