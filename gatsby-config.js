/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://gideongoddard.co.uk`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-121836060-2",
        head: true,
        anonymize: true,
        cookieDomain: "gideongoddard.co.uk",
        cookieFlags: "SameSite=None;Secure"
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/success`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
  ],
}
