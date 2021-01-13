import React from "react"
import FormStyles from "./Form.module.css"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

export default function Form() {
    return (
        <section className={FormStyles.section} id="contact">
            <div className={FormStyles.container}>
                <h2>Get in touch</h2>
                <p>Tell me a little bit about your business and what you're looking for and I'll get back to you within 24 hrs. We can then arrange a chat to discuss how I can help, even if it’s just to offer some advice.</p>
                <form method="post" action="/success" netlify-honeypot="bot-field" data-netlify="true" name="contact-form" className={FormStyles.form}>
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact-form" />
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Enter your full name..." maxLength="50" required />
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Enter your email address..." maxLength="50" required />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="10" placeholder="Enter your message..." maxLength="1000" required></textarea>
                    <input id="submit" type="submit" value="Send message" onClick={e => {
                        trackCustomEvent({
                            category: "form",
                            action: "submit",
                            label: "contact",
                        })}} /> 
                </form>
            </div>
        </section>
    )
}