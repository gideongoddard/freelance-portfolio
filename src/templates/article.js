import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import * as ArticleStyles from "./article.module.css"

export default function Article({ data }) {
    const article = data.markdownRemark
    
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{article.frontmatter.title} | Gideon Goddard, Web Developer</title>
                <meta name="description" content={article.excerpt} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://gideongoddard.co.uk${article.fields.slug}`} />
                <meta property="og:title" content={`${article.frontmatter.title} | Gideon Goddard, Web Developer`} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:image" content={article.frontmatter.featuredImage} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={`https://gideongoddard.co.uk${article.fields.slug}`} />
                <meta name="twitter:title" content={`${article.frontmatter.title} | Gideon Goddard, Web Developer`} />
                <meta name="twitter:description" content={article.excerpt} />
                <meta name="twitter:image" content={article.frontmatter.featuredImage} />

                <html lang="en"></html>
            </Helmet>
            <Title>
                <h1>{article.frontmatter.title}</h1>
                <p style={{color: "var(--neutral-500)"}}>{article.frontmatter.date}</p>
            </Title>
            <div className={ArticleStyles.articleBody}>
                <img src={article.frontmatter.featuredImage} alt={article.frontmatter.featuredImageAlt} />
                <div dangerouslySetInnerHTML={{ __html: article.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                featuredImage
                featuredImageAlt
            }
            fields {
                slug
            }
            excerpt
        }
    }
`