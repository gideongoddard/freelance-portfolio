import React from "react"
import TypeScaleStyles from "./TypeScale.module.css"

export default function TypeScale(props) {
    return (
        <div className={`${TypeScaleStyles.type} ${props.addedClass}`}>The quick brown fox jumps over the lazy dog.</div>
    )
}