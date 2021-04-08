import React from "react"
import * as GideonStyles from "./Gideon.module.css"

export default function Gideon({ children }) {
    return (
        <section className={GideonStyles.section}>
            <div className={GideonStyles.container}>
                <div className={GideonStyles.surround}>
                    <div className={GideonStyles.contentBox}>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}