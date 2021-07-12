---
title: A guide to using Gatsby & Netlify CMS for non-blog pages
date: 2021-07-10T13:30:31.112Z
featuredImage: /assets/gatsby-netlify_cms.png
featuredImageAlt: Gatsby & Netlify CMS logos
---
Both Gatsby and Netlify CMS have documentation that covers how to set up Netlify CMS on a Gatsby site in order to source content for a blog. You can see these instructions below:

[Netlify CMS platform instructions for Gatsby](https://www.netlifycms.org/docs/gatsby/)

[Gatsby instructions for sourcing from Netlify CMS](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-netlify-cms/)

What neither Gatsby, nor Netlify CMS docs cover well for beginners is how to source content from Netlify CMS for regular (non-blog) pages. The key difference is that for blog content, you'd be using the Netlify CMS **Folder** collection type, whereas for regular pages, you'd be using the Netlify CMS **Files** collection type.

Below are the steps for doing so, however they assume that you already have a Gatsby site set up with the `gatsby-source-filesystem` plugin installed and that the site is hosted on Netlify with GitHub CI in place.

## Using the 'Files' collection type for non-blog page content

1. Install the Netlify CMS app and the Gatsby Netlify CMS plugin and add the plugin to your `gatsby-config.js` file.
2. Create a Netlify CMS config file at `/static/admin/config.yml`:

   ```yaml
   backend:
     name: github
     repo: [github-username]/[repo-name]
     branch: [branch-name]

   media_folder: static/assets
   public_folder: /assets

   collections:
     - label: "Pages"
       name: "pages"
       files:
         - label: "Home"
           name: "home"
           file: "content/home.yml"
           fields:
             - {label: Title, name: title, widget: string}
   ```

   *This exampe assumes that your config file is to set up one page (Home) to have one text field (Title) editable via the CMS. It also assumes login via GitHub - other options are available.*
3. Create a corresponding empty file at `/content/home.yml`.
4. Follow [the instructions in the Netlify docs](https://docs.netlify.com/visitor-access/oauth-provider-tokens/#using-an-authentication-provider) for adding GitHub authentication via OAuth.
5. Install the Gatsby Transformer Yaml plugin and add it to your `gatsby-config.js` file.
6. In your `index.js` file you want the following:

   ```javascript
   import { graphql } from "gatsby"

   export default function Home({ data }) {
     return (
       <h1>{data.allFile.edges[0].node.childContentYaml.title}</h1>
       ...
     )
   }

   export const query = graphql`
     query {
       allFile(filter: {sourceInstanceName: {eq: "content"}, name: {eq: "home"}}) {
         edges {
           node {
             childContentYaml {
               title
             }
           }
         }
       }
     }
   `
   ```

   *This imports graphql at the top of the file, writes the graphql query to pull in the content at the bottom of the file and creates an h1 element containing the content in between.*
7. Now, to create the content you need to go to `[your-site-url]/admin/` and follow the UI to Pages > Home > Title. Enter your content and publish!

When you publish, it will push an update to your repo which will in turn trigger a deploy on Netlify to make the update.

## Using Git Gateway authentication

The instructions above rely on GitHub for authentication. This means that any content editors will need to have a GitHub account and will need write permissions on your repository. There are a bunch of reasons why you might not want this. So what's an alternative? I've gone for Git Gateway. Here's how to do it...

1. Update your Netlify CMS config file to use Git Gateway:

   ```yaml
   backend:
     name: git-gateway
   ```
2. Go to your site's dashboard in Netlify and enable **Identity** in the Identity tab.
3. You'll then want to follow the link for **Settings and usage** and set Registration to invite only.
4. Staying on the same screen, scroll down to **Services** and enable Git Gateway.
5. Invite yourself as a user, follow the link in your invitation email and set your password.

You can then repeat step 5 for any other content managers that need CMS access for your site and it's mission accomplished!