import React from "react"
import SuccessStyles from "./success.module.css"
import Button from "../components/Button/Button"

export default function Success() {
    return (
        <div className={SuccessStyles.container}>
            <div className={SuccessStyles.content}>
                <h1>Thank you for your message</h1>
                <p>I always aim to respond within 1 working day so I look forward to being in contact with you soon.</p>
                <Button colour="primary" type="internal" to="/">Go to the home page</Button>
            </div>
        </div>
    )
}