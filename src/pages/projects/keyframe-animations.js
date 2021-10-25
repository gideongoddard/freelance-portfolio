import React from "react"
import * as AnimationStyles from "./keyframe-animations.module.css"
import Layout from "../../components/Layout/Layout"
import Title from "../../components/Title/Title"

function Animations() {
    return (
        <Layout>
            <Title>
                <h1>Keyframe Animations</h1>
                <p>Some examples of how CSS keyframe animations can be used in practice.</p>
            </Title>
            <section className={AnimationStyles.main}>
                <div className={AnimationStyles.container}>
                    <h2>Slide in</h2>
                    <div className={`${AnimationStyles.slide} ${AnimationStyles.box}`}></div>
                    <h2>Fade in</h2>
                    <div className={`${AnimationStyles.fade} ${AnimationStyles.box}`}></div>
                    <h2>Drop in</h2>
                    <div className={`${AnimationStyles.drop} ${AnimationStyles.box}`}></div>
                    <h2>Breathe</h2>
                    <div className={`${AnimationStyles.breathe} ${AnimationStyles.box}`}></div>
                </div>
            </section>
        </Layout>
    )
}

export default Animations