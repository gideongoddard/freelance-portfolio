const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    result.data.allMarkdownRemark.edges.forEach(({ node}) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/article.js`),
            context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        })
    })

    const articles = result.data.allMarkdownRemark.edges
    const articlesPerPage = 12
    const numPages = Math.ceil(articles.length / articlesPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve(`./src/templates/article-listing.js`),
            context: {
                limit: articlesPerPage,
                skip: i * articlesPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })
}