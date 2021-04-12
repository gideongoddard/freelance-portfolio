import React from "react"
import PropTypes from "prop-types"
import * as TestimonialStyles from "./Testimonial.module.css"

function Testimonial(props) {
    return (
        <section className={TestimonialStyles.section}>
            <h2>Don't take my word for it...</h2>
            <div className={TestimonialStyles.container}>
                <div className={TestimonialStyles.quote}>
                    <p><em>{props.quote}</em></p>
                </div>
                <div className={TestimonialStyles.client}>
                    <p><strong>- {props.client}</strong></p>
                </div>
            </div>
        </section>
    )
}

Testimonial.propTypes = {
    quote: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
}

export default Testimonial