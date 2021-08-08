import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Head = ({ page }) => {
  const { site: { siteMetadata: { author, description } } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
        }
      }
    }
  `)
  return (
    <Helmet>
      <title>{`${page} | ${author}`}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}


export default Head