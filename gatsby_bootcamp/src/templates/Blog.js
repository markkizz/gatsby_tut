import React from "react"
import { graphql } from "gatsby"

import DefaultLayout from "../components/DefaultLayout"

export default function Blog({data: {markdownRemark}}) {
  return (
    <DefaultLayout>
      <h2>{markdownRemark.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </DefaultLayout>
  )
}

export const data = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
