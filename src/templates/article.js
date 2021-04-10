import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import * as ArticleStyles from "./article.module.css"

export default function Article({ data }) {
    const article = data.markdownRemark
    
    return (
        <Layout>
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
        }
    }
`