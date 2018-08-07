import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import AnteFooter from "../components/AnteFooter";

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props;
    const { posts: posts } = data;
    const { homeblog: homeblog } = data;
    const { newsletter: newsletter } = data;

    const newsletterImage = newsletter.edges[0].node.frontmatter.newsletterImage;

    return (
      <main id="blog">

        <Helmet title={`Blog | Student Hotels`}/>

        <Hero image={homeblog.frontmatter.heroImage.childImageSharp.sizes} heading={homeblog.frontmatter.title}/>

        <section className="section">
          <div className="container has-margin-bottom has-margin-top">
            <div className="columns is-multiline">
              {posts.edges
                .map(({ node: post }, index) => (
                  <div
                    className="column is-one-third"
                    key={post.id}
                  >
                    <article
                      className={"notification" + (index % 3 === 1 ? " is-primary" : "") + (index % 4 === 3 ? " is-black" : "")}>
                      <div className="sh-blog-content">
                        <span className="title is-uppercase is-3">{post.frontmatter.title}</span>

                        <div className="sh-blog-date">
                          <small>{post.frontmatter.date}</small>
                        </div>
                        <p>
                          {post.excerpt}
                        </p>
                      </div>
                      <Link className="sh-blog-link" to={post.fields.slug}></Link>
                    </article>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <Newsletter image={newsletterImage.childImageSharp.sizes} heading={homeblog.frontmatter.title}/>

        <AnteFooter/>

      </main>
    );
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object,
    homeblog: PropTypes.object,
    newsletter: PropTypes.object
  })
};

export const blogPageQuery = graphql`
  query BlogQuery($id: String!) {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD MMMM, YYYY", locale: "it")
          }
        }
      }
    }
    homeblog: markdownRemark(
      id: { eq: $id }
    ) {
      id
      frontmatter {
        title
        templateKey
        heroImage {
          childImageSharp{
            sizes(maxWidth: 1280) {
              ...GatsbyImageSharpSizes
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