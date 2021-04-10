import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/Layout"
import Card from "../components/Card/Card"
import Title from "../components/Title/Title"
import * as ListingStyles from "./article-listing.module.css"

export default class Blog extends React.Component {
    render() {
        const articles = this.props.data.allMarkdownRemark.edges
        const { numPages } = this.props.pageContext

        return (
            <Layout>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Get insights, tips, advice and the occasional musing from the perspective of a freelance web developer." />
                    <title>Blog | Gideon Goddard, Web Developer</title>
                    <html lang="en"></html>
                </Helmet>
                <Title>
                    <h1>Blog</h1>
                    <h2>Insights, tips, advice and the occasional musing.</h2>
                </Title>
                <section className={ListingStyles.section}>
                    <div className={ListingStyles.container}>
                        {articles.map(({ node }) => (
                            <Card
                                key={node.id}
                                imgSrc={node.frontmatter.featuredImage}
                                imgAlt={node.frontmatter.featuredImageAlt}
                                heading={node.frontmatter.title}
                                excerpt={node.excerpt}
                                linkTo={node.fields.slug}
                                linkText="Read article"
                            />
                        ))}
                    </div>
                </section>
                <div style={{display: numPages > 1 ? 'block' : 'none'}}>
                    {Array.from({ length: numPages }, (_, i) => (
                        <Link key={`pagination-number${i + 1}`} to={`/news/${i === 0 ? "" : i + 1}`}>
                            {i + 1}
                        </Link>
                    ))}
                </div>
            </Layout>
        )
    }
}

export const articleListQuery = graphql`
    query articleListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date(formatString: "DD MMMM YYYY")
                        featuredImage
                        featuredImageAlt
                    }
                    excerpt
                }
            }
        }
    }
`