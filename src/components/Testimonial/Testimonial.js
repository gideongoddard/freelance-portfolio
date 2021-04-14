import React from "react"
import PropTypes from "prop-types"
import * as TestimonialStyles from "./Testimonial.module.css"

function Testimonial(props) {
    return (
        <section className={TestimonialStyles.section}>
            <h2>Don't just take my word for it...</h2>
            <div className={TestimonialStyles.container}>
                <div className={TestimonialStyles.quote}>
                    <p>{props.quote}</p>
                </div>
                <div className={TestimonialStyles.client}>
                    <p>- {props.client}</p>
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