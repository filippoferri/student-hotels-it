import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Content, { HTMLContent } from "../components/Content";
import AnteFooter from "../components/AnteFooter";
import Link from "gatsby-link";

export const ThankYouPageTemplate = ({
    helmet,
    content,
    contentComponent,
    title
  }) => {

  const PageContent = contentComponent || Content;

  return (
    <main>

      {helmet || ""}

      <section className="hero is-fullheight has-background-primary no-overlay">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-6-desktop is-offset-3-desktop has-text-white">
                <h1 className="title">{title}</h1>
                <PageContent content={content}/>
                <div className="content has-text-centered">
                  <Link to="/" className="button is-large">Vai alla home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnteFooter/>

    </main>
  );
};

ThankYouPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const ThankYouPage = ({ data }) => {

  const { current: page } = data;
  const { newsletter: newsletter } = data;
  const image = newsletter.edges[0].node;

  return (
    <ThankYouPageTemplate
      helmet={<Helmet title={`${page.frontmatter.title} | Student Hotels`}>
        <html lang="it"/>
      </Helmet>}
      title={page.frontmatter.title}
      subtitle={page.frontmatter.subtitle}
      content={page.html}
      contentComponent={HTMLContent}
      newsletterImage={image.frontmatter.newsletterImage}
    />
  );
};

ThankYouPage.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.object,
    newsletter: PropTypes.object
  })
};

export default ThankYouPage;

export const thankYouPageQuery = graphql`
  query ThankYouByID($id: String!) {
    current: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        subtitle
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
