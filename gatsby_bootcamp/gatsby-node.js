const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")
/**
 * Goal
 * 1. Generate a slug for each post
 *   convert gatsby.md -> gatsby -> /blog/gatsby (api end-point)
 * 2. Generate the blog post page templete
 * 3. Generate a new page for each post
 */
module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // convert /someapath/gatsby.md -> gatsby
    const slug = createFilePath({ node, getNode, basePath: `posts` }).split(
      "/"
    )[1]
    // create internal feild for grarphQL
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

/**
 * Create pages from markdown
 * 1. Get path to template
 * 2. Get markdown data
 * 3. Create new pages
 */
module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/Blog.js`)
  try {
    const result = await graphql(`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
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
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug
        }
      })
    })
  } catch (err) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return;
  }
}
