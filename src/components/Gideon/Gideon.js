import React from "react"
import Button from "../Button/Button"
import GideonStyles from "./Gideon.module.css"

export default function Gideon() {
    return (
        <section className={GideonStyles.section}>
            <div className={GideonStyles.container}>
                <div className={GideonStyles.surround}>
                    <div className={GideonStyles.contentBox}>
                        <h3>Hi, I'm Gideon.</h3>
                        <p>I help businesses succeed online by creating websites that convert visits into enquiries and sales.</p>
                        <Button type="external" style="primary" to="/#contact">Let's talk</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}