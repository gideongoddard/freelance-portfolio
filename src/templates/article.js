import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"

export default function Article({ data }) {
    const article = data.markdownRemark
    
    return (
        <Layout>
            <div style={{width: "90%", maxWidth: 800, margin: "auto"}}>
                <h1>{article.frontmatter.title}</h1>
                <p style={{color: "var(--neutral-500)"}}>{article.frontmatter.date}</p>
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
        }
    }
`