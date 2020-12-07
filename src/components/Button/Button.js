import React from "react"
import { Link } from "gatsby"
import ButtonStyles from "./Button.module.css"

export default function Button(props) {
    return <Link className={ButtonStyles[props.type]} to={props.to}>{props.children}</Link>
}