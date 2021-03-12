import React from "react"
import TitleStyles from "./Title.module.css"
import Button from "../Button/Button"

export default function Title(props) {
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