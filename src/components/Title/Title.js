import React from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button"
import * as TitleStyles from "./Title.module.css"

function Title(props) {
    return (
        <section className={TitleStyles.section}>
            <div className={TitleStyles.container}>
                {props.children}
                {
                    props.button ? (
                        <Button type={props.buttonType} colour={props.buttonColour} to={props.buttonTo}>{props.buttonText}</Button>
                    ) : <></>
                }
            </div>
        </section>
    )
}

Title.propTypes = {
    button: PropTypes.bool,
    buttonType: PropTypes.string,
    buttonColour: PropTypes.string,
    buttonTo: PropTypes.string,
    buttonText: PropTypes.string,
}

export default Title