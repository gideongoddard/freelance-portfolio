import React from "react"
import SSStyles from "./ServiceSummary.module.css"

const Service = props => (
    <div className={SSStyles.service}>
        <span className={SSStyles.item}>{props.item}</span>
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
    </div>
)

export default function ServiceSummary() {
    return (
        <section className={SSStyles.section}>
            <div className="container">
                <h2>What goes into creating outstanding websites</h2>
                <div className={SSStyles.serviceContainer}>
                    <Service
                        item="01"
                        heading="Digital Strategy"
                        description="No project should start without a clear understanding of what it's supposed to achieve. We'll work together to ensure your digital activity is perfectly aligned with your business goals."
                    />
                    <Service
                        item="02"
                        heading="Web Design"
                        description="Great design means more than just looking good – it’s finding the sweet spot between aesthetics, business goals and user experience. It means designing what’ll deliver results."
                    />
                    <Service
                        item="03"
                        heading="Web Development"
                        description="I love to build lightning-fast, responsive, future-proof websites which look great and are easy to use. I'll always choose the best tools for your needs, always using modern techniques."
                    />
                    <Service
                        item="04"
                        heading="SEO"
                        description="When looking to reach an online audience, search engine optimisation (SEO) is a key factor. I consider this at every step of a website project to ensure technical and content excellence."
                    />
                    <Service
                        item="05"
                        heading="Website Testing"
                        description="I take a meticulous approach to testing every aspect of a website, using multiple approaches and tools so that nothing is left to chance in ensuring that quality is of the highest standard."
                    />
                    <Service
                        item="06"
                        heading="Analysis & Improvement"
                        description="It's important to make the most of your investment. I offer packages to maintain your site,  analyse how it's performing and recommend incremental improvements to get better results."
                    />
                </div>
            </div>
        </section>
    )
}