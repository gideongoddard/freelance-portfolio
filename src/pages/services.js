import React from "react"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRoute, faPaintBrush, faLaptopCode, faSearchPlus, faTools, faChartLine } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/Layout/Layout"
import Button from "../components/Button/Button"
import Gideon from "../components/Gideon/Gideon"
import Title from "../components/Title/Title"
import MetaImage from "../images/meta-image.png"
import * as ServicesStyles from "./services.module.css"

const Service = props => (
    <div className={ServicesStyles.service}>
        <span className={ServicesStyles.icon}><FontAwesomeIcon icon={props.icon} style={{fontSize: 24}} /></span>
        <h3>{props.heading}</h3>
        {props.children}
    </div>
)

export default function Services() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Services | Gideon Goddard, Web Developer</title>
                <meta name="title" content="Services | Gideon Goddard, Web Developer" />
                <meta name="description" content="From digital strategy to SEO, from web design & development to testing, analysis & improvement, there's a lot that goes into making an outstanding website. Partner with me and don't leave it to chance." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://gideongoddard.co.uk/services/" />
                <meta property="og:title" content="Services | Gideon Goddard, Web Developer" />
                <meta property="og:description" content="From digital strategy to SEO, from web design & development to testing, analysis & improvement, there's a lot that goes into making an outstanding website. Partner with me and don't leave it to chance." />
                <meta property="og:image" content={MetaImage} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://gideongoddard.co.uk/services/" />
                <meta name="twitter:title" content="Services | Gideon Goddard, Web Developer" />
                <meta name="twitter:description" content="From digital strategy to SEO, from web design & development to testing, analysis & improvement, there's a lot that goes into making an outstanding website. Partner with me and don't leave it to chance." />
                <meta name="twitter:image" content={MetaImage} />

                <html lang="en"></html>
            </Helmet>
            <Title subtitle="What it takes to create outstanding websites">
                <h1>Making <span className="highlight">expert knowledge</span> available to you</h1>
                <h2>Creating a website is easy. Creating a website that delivers results for your business isn't. Here's what goes into creating outstanding websites that are focused on your objectives as well as what your customers and clients need.</h2>
            </Title>
            <section className={ServicesStyles.serviceSection}>
                <div className={ServicesStyles.serviceContainer}>
                    <Service icon={faRoute} heading="Digital Strategy">
                        <p>No project should start without a clear understanding of what it's supposed to achieve. We'll work together to ensure your digital activity is perfectly aligned with your business goals.</p>
                        <p>I have over 10 years experience working on web projects with businesses of every size and I'll work with you to help you shape the best solution to deliver on what you want to achieve.</p>
                    </Service>
                    <Service icon={faPaintBrush} heading="Web Design">
                        <p>Great design means more than just looking good – it’s finding the sweet spot between aesthetics, business goals and user experience. It means designing what’ll deliver results.</p>
                        <p>I always design mobile-first to make sure that users on any device will all get a great design and a great experience, which is essential now that over half of web traffic is on mobile.</p>
                    </Service>
                    <Service icon={faLaptopCode} heading="Web Development">
                        <p>I love to build lightning-fast, responsive, future-proof websites which look great and are easy to use. I'll always choose the best tools for your needs, always using modern techniques.</p>
                        <p>You can be confident of a site that loads in a flash and is created with code that's easy to maintain, making it a great platform to build upon so your site can grow with your business.</p>
                    </Service>
                    <Service icon={faSearchPlus} heading="SEO">
                        <p>When looking to reach an online audience, search engine optimisation (SEO) is a key factor. I consider this at every step of a website project to ensure technical and content excellence.</p>
                        <p>Without ensuring your website is technically excellent and has great content that's well structured, it's all too easy to end up with a great looking site that nobody can find.</p>
                    </Service>
                    <Service icon={faTools} heading="Website Testing">
                        <p>I take a meticulous approach to testing every aspect of a website, using multiple approaches and tools so that nothing is left to chance in ensuring that quality is of the highest standard.</p>
                        <p>I use tools to help carry out testing across a wide range of browsers and operating systems and I use automated testing to enable you to make updates to your site with confidence.</p>
                    </Service>
                    <Service icon={faChartLine} heading="Analysis & Improvement">
                        <p>It's important to make the most of your investment. I offer packages to maintain your site,  analyse how it's performing and recommend incremental improvements to get better results.</p>
                        <p>You'll also get peace of mind in knowing that your site is being actively monitored for reliability, security and software updates - let me worry about that stuff so you don't have to!</p>
                    </Service>
                </div>
            </section>
            <Gideon>
                <p>My background of over a decade of working on web projects for growing small businesses and some of the world's biggest brands - plus much in between - gives me the expertise to not only create you a website, but to make sure we create you the <em>right</em> website to deliver results for your business.</p>
                <Button colour="primary" type="internal" to="/hire-me/">Let's get started</Button>
            </Gideon>
        </Layout>
    )
}