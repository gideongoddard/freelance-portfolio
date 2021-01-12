import React from "react"
import { Link } from "gatsby"
import ButtonStyles from "./Button.module.css"

export default function Button(props) {
    return (
        <>
        {
            props.type === "external" ? (
                <a className={ButtonStyles[props.colour]} href={props.to}>{props.children}</a>
            ) : (
                <Link className={ButtonStyles[props.colour]} to={props.to}>{props.children}</Link>
            )
        }
        </>
    )
}