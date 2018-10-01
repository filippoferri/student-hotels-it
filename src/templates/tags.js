import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import AnteFooter from "../components/AnteFooter";
import Img from "gatsby-image";

class TagRoute extends React.Component {

  variation(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  addClass() {
    var newclass;
    const num = this.variation(1, 4);

    switch (num) {
      case 1:
        newclass = " is-secondary";
        break;
      case 2:
        newclass = " is-greenish";
        break;
      case 3:
        newclass = " is-sunset";
        break;
      default:
        newclass = " is-primary";
    }

    return newclass;
  }

  findImage(image, title) {
    return <div className="is-image-wrapper has-position-absolute"><Img sizes={image} alt={title} /></div>
  }

  render() {
    const { data } = this.props;
    const posts = data.posts.edges;
    const heroImage = data.hero.edges[0].node.frontmatter.heroImage;
    const newsletterImage = data.newsletter.edges[0].node.frontmatter.newsletterImage;

    const postLinks = posts.map(post => (
      <div
        className="column is-6-tablet is-4-desktop"
        key={post.node.fields.slug}
      >
        <article>
          <Link to={post.node.fields.slug} className={"notification is-paddingless" + this.addClass()}>{this.findImage(post.node.frontmatter.heroImage.childImageSharp.sizes, post.node.frontmatter.title)}</Link>
          <div className="sh-blog-content">
            <Link to={post.node.fields.slug} className="title is-5">{post.node.frontmatter.title}</Link>
          </div>
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

        <Helmet title={`${tag} | ${title}`}><html lang="it" /></Helmet>

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
            fields {
            slug
          }
          frontmatter {
            title
            heroImage {
              childImageSharp{
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
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
