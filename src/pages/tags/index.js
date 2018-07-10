import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import blogBg from "../../img/blog-bg.jpg";

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <section id="blog">
    <Helmet title={`Tags | ${title}`} />

    <div className="hero is-medium is-primary is-bold"
         style={{ backgroundImage: `url(${blogBg})` }}>
      <div className="hero-body">
        <div className="container is-centered"></div>
      </div>
    </div>

    <div className="container has-margin-bottom has-margin-top">
      <div className="columns is-multiline">
            {group.map(tag => (
              <div className="column is-one-third"
                   key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </div>
            ))}
      </div>
    </div>
  </section>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
