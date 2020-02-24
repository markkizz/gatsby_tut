import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import DefaultLayout from "../components/DefaultLayout"

export default function Blog() {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { eq: "gatsby" } }) {
        frontmatter {
          title
          date
        }
        html
      }
    }
  `)
  return (
    <DefaultLayout>
      <h2>{markdownRemark.title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
      />
    </DefaultLayout>
  )
}
