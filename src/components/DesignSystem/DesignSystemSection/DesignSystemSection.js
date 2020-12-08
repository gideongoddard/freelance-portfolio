import React from "react"
import SectionStyles from "./DesignSystemSection.module.css"

export default function DesignSystemSection(props) {
    return (
        <section className={SectionStyles.section}>
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            <hr />
            {props.children}
        </section>
    )
}