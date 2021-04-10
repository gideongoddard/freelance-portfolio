import React from "react"
import { Link } from "gatsby"
import * as CardStyles from "./Card.module.css"

export default function Card(props) {
    return (
        <div className={CardStyles.card}>
            <div className={CardStyles.imgContainer}>
                <Link to={props.linkTo}>
                    <img src={props.imgSrc} alt={props.imgAlt} />
                </Link>
            </div>
            <div className={CardStyles.txtContainer}>
                <h3>{props.heading}</h3>
                <p>{props.excerpt}</p>
                <Link to={props.linkTo}>{props.linkText}</Link>
            </div>
        </div>
    )
}