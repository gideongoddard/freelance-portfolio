import React from "react"
import PropTypes from "prop-types"
import * as FormStyles from "./Form.module.css"

function Form(props) {
    return (
        <section>
            <div className={FormStyles.container}>
                <h2>{props.heading}</h2>
                <p>{props.intro}</p>
                <form method="post" action="/success" netlify-honeypot="bot-field" data-netlify="true" name="contact-form" className={FormStyles.form}>
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact-form" />
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Enter your full name..." maxLength="50" required />
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Enter your email address..." maxLength="50" required />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="10" placeholder="Enter your message..." maxLength="1000" required></textarea>
                    <input id="submit" type="submit" value="Send message" /> 
                </form>
            </div>
        </section>
    )
}

Form.propTypes = {
    heading: PropTypes.string,
    intro: PropTypes.string,
}

export default Form