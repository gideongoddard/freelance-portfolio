import React from "react"
import Button from "../Button/Button"
import * as TitleStyles from "./Title.module.css"

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