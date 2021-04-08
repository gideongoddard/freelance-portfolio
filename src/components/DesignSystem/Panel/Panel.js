import React from "react"
import * as PanelStyles from "./Panel.module.css"

export default function Panel(props) {
    return <div className={`${PanelStyles.panel} ${props.addedClass}`}>{props.children}</div>
}