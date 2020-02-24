import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/DefaultLayout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(data);
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <li key={node.id}>
            <h3>
              <Link to={`/blog/${node.fields.slug}`}>
              {node.frontmatter.title}
              </Link>
            </h3>
            <p> {node.frontmatter.date} </p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
