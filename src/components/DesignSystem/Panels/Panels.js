import React from "react"
import PanelsStyles from "./Panels.module.css"

export default function Panels(props) {
    return (
        <div className={PanelsStyles.panels} style={props.style}>
            {props.children}
        </div>
    )
}