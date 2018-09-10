import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import AnteFooter from "../components/AnteFooter";

export const DefaultPageTemplate = ({
    helmet,
    content,
    contentComponent,
    title,
    heroImage,
    newsletterImage
  }) => {

  const PageContent = contentComponent || Content;

  return (
    <main className="default-page">

      {helmet || ""}

      <Hero image={heroImage.childImageSharp.sizes} heading={title}/>

      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-6-desktop is-offset-3-desktop">

              <PageContent content={content}/>

            </div>
          </div>
        </div>
      </section>

      <Newsletter image={newsletterImage.childImageSharp.sizes}/>

      <AnteFooter/>

    </main>
  );
};

DefaultPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const DefaultPage = ({ data }) => {

  const { current: page } = data;
  const { newsletter: newsletter } = data;
  const image = newsletter.edges[0].node;

  return (
    <DefaultPageTemplate
      helmet={<Helmet title={`${page.frontmatter.title} | Student Hotels`}><html lang="it" /></Helmet>}
      title={page.frontmatter.title}
      heroImage={page.frontmatter.heroImage}
      content={page.html}
      contentComponent={HTMLContent}
      newsletterImage={image.frontmatter.newsletterImage}
    />
  );
};

DefaultPage.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.object,
    newsletter: PropTypes.object
  })
};

export default DefaultPage;

export const defaultPageQuery = graphql`
  query DefaultPageByID($id: String!) {
    current: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        heroImage {
          childImageSharp {
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
