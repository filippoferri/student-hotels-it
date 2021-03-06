import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import * as Scroll from 'react-scroll';


import Hero from "../components/Hero";
import Content, { HTMLContent } from "../components/Content";
import SharePost from "../components/SharePost";
import AddDisqus from "../components/Disqus";
import Newsletter from "../components/Newsletter";
import AnteFooter from "../components/AnteFooter";

let ScrollLink = Scroll.Link;

export const BlogPostTemplate = ({
    helmet,
    slug,
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

  const path = "https://studenthotels.it/" + slug;
  const PostContent = contentComponent || Content;

  return (
    <main className="blog-post">

      {helmet || ""}

      <Hero image={heroImage.childImageSharp.sizes} heading={title} addClass="is-post"/>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6-desktop is-offset-3-desktop">

              <div className="content">

                <p className="is-italic has-margin-bottom">{description}</p>

                <PostContent content={content}/>

                {tags && tags.length ? (
                  <div className="is-content-section has-margin-top has-border-top has-border-bottom">
                    <span className="has-text-weight-semi-bold">In questo articolo:</span>
                    {tags.map(tag => (
                      <span className="is-tag" key={tag + `tag`}>
                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                          </span>
                    ))}
                  </div>
                ) : null}

                <div className="is-content-section has-border-bottom">
                  <div className="is-flex is-flex-center">
                    <figure className="image is-96x96">
                      <img className="is-rounded" src="https://source.unsplash.com/vXQza9AUe40/300x300" alt=""/>
                    </figure>
                    <div className="is-inline-block" style={{ "flex": "1" }}><span
                      className="has-text-weight-semi-bold">Scritto da Alexia Zanti</span><br/>Alexia è la Responsabile
                      Marketing in StudentHotels. Ama viaggiare e dispensare utili consigli per viaggiatori. Ha ricevuto la nomination come miglior taglio di capelli in ufficio.
                    </div>
                  </div>
                </div>

                <div className="is-content-section has-border-bottom">
                  <div className="is-flex is-flex-center">
                    <div><span className="has-text-weight-semi-bold">Condividi:</span></div>
                    <div className="has-text-right">
                      <SharePost shareUrl={path} title={title} media={heroImage.childImageSharp.sizes.src}/>
                    </div>
                  </div>
                </div>

                <div className="is-content-section">
                  <div className="columns">
                    <div className="column">
                      <ScrollLink activeClass="active" className="button is-medium is-fullwidth" type="submit" to="conversation" spy={true} smooth={true} offset={50} >
                        Unisciti alla conversazione
                      </ScrollLink>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-primary is-medium">
        <div className="next-post">
          <div className="container">
            <div className="columns">

              <div className="column is-6 is-offset-3 is-centered">
                <div className="is-uppercase has-text-white">Ti potrebbe interessare</div>
                {nextTitle ? (
                  <Link to={nextSlug} className="title is-4 is-uppercase has-text-white">{nextTitle}</Link>
                ) : (
                  <Link to={prevSlug} className="title is-4 is-uppercase has-text-white">{prevTitle}</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" name="conversation">
        <div className="container">
          <div className="columns">
            <div className="column is-8-desktop is-offset-2-desktop has-margin-bottom">

              <div className="content">
                <AddDisqus title={title} url={path}/>
              </div>
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
  newsletterImage: PropTypes.shape()
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
    { name: "description", content: post.frontmatter.description },

    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "@studenthotels" },
    { name: "twitter:title", content: post.frontmatter.title },
    { name: "twitter:author", content: "@studenthotels" },
    {
      name: "twitter:image",
      content: "https://studenthotels.it" + post.frontmatter.heroImage.childImageSharp.sizes.src
    },

    { property: "og:type", content: "article" },
    { property: "og:url", content: post.fields.slug },
    { property: "og:title", content: post.fields.title },
    { property: "og:description", content: post.frontmatter.description },
    {
      property: "og:image",
      content: "https://studenthotels.it" + post.frontmatter.heroImage.childImageSharp.sizes.src
    },
    { property: "og:site_name", content: "studenthotels.it" },
    { property: "og:author", content: "https://www.facebook.com/studenthotels" },
    { property: "fb:admins", content: "271106406768998" }
  ];

  return (
    <BlogPostTemplate
      slug={post.fields.slug}
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Student Hotels`} meta={meta}>
        <html lang="it"/>
      </Helmet>}
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
      fields {
        slug
      }
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
