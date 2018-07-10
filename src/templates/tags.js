import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import blogBg from "../img/blog-bg.jpg";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (

      <div
        className="column is-one-third"
        key={post.node.fields.slug}
      >
        <article
          className="notification">
          <div className="sh-blog-content">
            <span className="title is-uppercase is-3">{post.node.frontmatter.title}</span>

            <div className="sh-blog-date">
              <small>{post.node.frontmatter.date}</small>
            </div>
            <p>
              {post.node.excerpt}
            </p>
          </div>
          <Link className="sh-blog-link"  to={post.node.fields.slug}></Link>
        </article>
      </div>
    ))
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} articol${
      totalCount === 1 ? 'o' : 'i'
    } in “${tag}”`

    return (
      <section id="blog">

        <Helmet title={`${tag} | ${title}`} />

        <div className="hero is-medium is-primary is-bold"
             style={{ backgroundImage: `url(${blogBg})` }}>
          <div className="hero-body">
            <div className="container is-centered">
              <h3 className="title is-size-4 is-uppercase">{tagHeader}</h3>
            </div>
          </div>
        </div>

        <div className="container has-margin-bottom has-margin-top">
          <div className="columns is-multiline">

              {postLinks}

          </div>
        </div>
      </section>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
