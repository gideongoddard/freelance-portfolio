import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as ButtonStyles from "./Button.module.css"

function Button(props) {
    return (
        <>
        {
            props.type === "external" ? (
                <a className={ButtonStyles[props.colour]} href={props.to} target="_blank" rel="noopener noreferrer">{props.children}</a>
            ) : (
                <Link className={ButtonStyles[props.colour]} to={props.to}>{props.children}</Link>
            )
        }
        </>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    href: PropTypes.string,
    to: PropTypes.string,
}

export default Button