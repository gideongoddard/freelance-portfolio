import React from "react"
import SectionStyles from "./DesignSystemSection.module.css"

export default function DesignSystemSection(props) {
    return (
        <section className={SectionStyles.section}>
            <h1>{props.heading}</h1>
            <p>{props.description}</p>
            <hr />
            {props.children}
        </section>
    )
}