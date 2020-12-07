import React from "react"
import PanelStyles from "./Panel.module.css"
import DesignSystemStyles from "../../../pages/design-system.module.css"

export default function Panel(props) {
    return <div className={`${PanelStyles.panel} ${props.addedClass}`}></div>
}