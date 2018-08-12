import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import Hero from "../components/Hero";
import Content, { HTMLContent } from "../components/Content";
import Newsletter from "../components/Newsletter";
import AnteFooter from "../components/AnteFooter";

export const BlogPostTemplate = ({
    helmet,
    content,
    contentComponent,
    description,
    tags,
    title,
    heroImage,
    nextTitle,
    nextSlug,
    prevTitle,
    prevSlug,
    newsletterImage
  }) => {
  const PostContent = contentComponent || Content;

  return (
    <main className="blog-post">

      {helmet || ""}

      <Hero image={heroImage.childImageSharp.sizes} heading={title}/>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6-desktop is-offset-3-desktop">

              <nav className="breadcrumb" aria-label="breadcrumb">
                <ul>
                  <li><Link to="https//studenthotels.it">Student Hotels</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                </ul>
              </nav>

              <div className="content">

                <p>{description}</p>

                <PostContent content={content}/>

                {tags && tags.length ? (
                  <div style={{ marginTop: `4rem` }}>
                    <ul className="taglist">
                      {tags.map(tag => (
                        <li key={tag + `tag`}>
                          <Link className="tag is-primary" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}</div>


            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-white-ter is-medium">
        <div className="next-post">
          <div className="container">
            <div className="columns">
              {nextTitle ? (
                <div className="column is-6 is-offset-3 is-centered">
                  <div className="is-uppercase">Ti potrebbe interessare</div>

                  <Link to={nextSlug} className="title is-4 is-uppercase">{nextTitle}</Link>
                </div>
              ) : (
                <div className="column is-6 is-offset-3 is-centered">
                  <div className="is-uppercase">Ti potrebbe interessare</div>
                  <Link to={prevSlug} className="title is-4 is-uppercase">{prevTitle}</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Newsletter image={newsletterImage.childImageSharp.sizes}/>

      <AnteFooter/>

    </main>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  heroImage: PropTypes.shape(),
  helmet: PropTypes.object,
  nextTitle: PropTypes.string,
  nextSlug: PropTypes.string,
  prevTitle: PropTypes.string,
  prevSlug: PropTypes.string,
  newsletterImage: PropTypes.shape(),
};

const BlogPost = ({ data }) => {

  const { current: post } = data;
  const { next: nextPost } = data;
  const { prev: prevPost } = data;

  if (nextPost !== null) {
    var nextTitle = nextPost.frontmatter.title;
    var nextSlug = nextPost.fields.slug;
  }

  if (prevPost !== null) {
    var prevTitle = prevPost.frontmatter.title;
    var prevSlug = prevPost.fields.slug;
  }

  const { newsletter: newsletter } = data;
  const image = newsletter.edges[0].node;

  const meta = [
    { name: 'description', content: post.frontmatter.description },

    { name: "twitter:site", content: "studenthotels.it" },
    { name: "twitter:creator", content: "StudentHotels.it" },
    { name: "twitter:title", content: post.frontmatter.title },
    { name: "twitter:image", content: "https//studenthotels.it" + post.frontmatter.heroImage.childImageSharp.sizes.src },

    { property: "og:title", content: post.frontmatter.title },
    { property: "og:site_name", content: "studenthotels.it" },
    { property: "og:type", content: "website" },
    { property: "og:description", content: post.frontmatter.description },
    { property: "og:image", content: "https//studenthotels.it" + post.frontmatter.heroImage.childImageSharp.sizes.src },
    { property: "og:site_name", content: "StudentHotels.it" }
  ]

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Student Hotels`} meta={meta} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      heroImage={post.frontmatter.heroImage}
      nextTitle={nextTitle}
      nextSlug={nextSlug}
      prevTitle={prevTitle}
      prevSlug={prevSlug}
      newsletterImage={image.frontmatter.newsletterImage}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.object,
    prev: PropTypes.object,
    next: PropTypes.object,
    newsletter: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!, $next: String!, $prev: String!) {
    current: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        heroImage {
          childImageSharp {
            sizes(maxWidth: 1280) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    next: markdownRemark(id: { eq: $next }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    prev: markdownRemark(id: { eq: $prev }) {
      fields {
        slug
      }
      frontmatter {
        title
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
