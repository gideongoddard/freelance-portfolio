import React from "react"
import FormStyles from "./Form.module.css"

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind.this
    }

    handleClick() {
        if (typeof window !== "undefined") {
            window.gtag("event", "conversion", {
                send_to: "AW-415626096/ugDZCLuew_YBEPDml8YB"
            })
        }
    }

    render() {
        return (
            <section className={FormStyles.section} id="contact">
                <div className={FormStyles.container}>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.intro}</p>
                    <form method="post" action="/success" netlify-honeypot="bot-field" data-netlify="true" name="contact-form" className={FormStyles.form}>
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact-form" />
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" placeholder="Enter your full name..." maxLength="50" required />
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="Enter your email address..." maxLength="50" required />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="10" placeholder="Enter your message..." maxLength="1000" required></textarea>
                        <input id="submit" type="submit" value="Send message" onClick={this.handleClick} /> 
                    </form>
                </div>
            </section>
        )
    }
}

export default Form