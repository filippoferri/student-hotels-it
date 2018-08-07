import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import AnteFooter from "../components/AnteFooter";

class TagRoute extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.posts.edges;
    const heroImage = data.hero.edges[0].node.frontmatter.heroImage;
    const newsletterImage = data.newsletter.edges[0].node.frontmatter.newsletterImage;

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
          <Link className="sh-blog-link" to={post.node.fields.slug}></Link>
        </article>
      </div>
    ));
    const tag = this.props.pathContext.tag;

    const title = this.props.data.site.siteMetadata.title;

    const totalCount = data.posts.totalCount;
    const tagHeader = `${totalCount} articol${
      totalCount === 1 ? "o" : "i"
      } in "${tag}"`;

    return (
      <main id="blog">

        <Helmet title={`${tag} | ${title}`}/>

        <Hero image={heroImage.childImageSharp.sizes} heading={tagHeader}/>

        <section className="section">
          <div className="container has-margin-bottom has-margin-top">
            <div className="columns is-multiline">

              {postLinks}

            </div>
          </div>
        </section>

        <Newsletter image={newsletterImage.childImageSharp.sizes}/>

        <AnteFooter/>

      </main>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMarkdownRemark(
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
    hero: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-tags" } } }
    ) {
      edges {
        node {
          frontmatter {
            heroImage {
              childImageSharp{
                sizes(maxWidth: 1280) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    newsletter: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            newsletterImage {
              childImageSharp{
                sizes(maxWidth: 1280) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
