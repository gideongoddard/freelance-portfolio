import React from "react"
import { Link } from "gatsby"
import ButtonStyles from "./Button.module.css"

export default function Button(props) {
    return (
        <>
        {
            props.type === "external" ? (
                <a className={ButtonStyles[props.style]} href={props.to}>{props.children}</a>
            ) : (
                <Link className={ButtonStyles[props.style]} to={props.to}>{props.children}</Link>
            )
        }
        </>
    )
}