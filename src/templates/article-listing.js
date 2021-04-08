import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"

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
                <section style={{backgroundColor: "var(--neutral-200)"}}>
                    <div style={{width: "90%", maxWidth: 800, margin: "auto"}}>
                        {articles.map(({ node }) => (
                            <div style={{backgroundColor: "white", padding: 24, marginBottom: 48, borderRadius: 10}} key={node.id}>
                                <h3 style={{margin: "16px 0", color: "var(--accent-600"}}>{node.frontmatter.title}</h3>
                                <p style={{fontSize: "var(--type-xxs)"}}>{node.excerpt}</p>
                                <Link style={{fontSize: "var(--type-xs)"}} to={node.fields.slug}>Read article</Link>
                            </div>
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
                    }
                    excerpt
                }
            }
        }
    }
`