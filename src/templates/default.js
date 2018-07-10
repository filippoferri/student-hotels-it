import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";

export const DefaultPageTemplate = ({
                                      content,
                                      contentComponent,
                                      title,
                                      hero,
                                      helmet
                                    }) => {

  const PageContent = contentComponent || Content;

  return (
    <section className="default-page">
      {helmet || ""}

      <div className="hero is-medium is-primary background-image">
        <div className="hero-body"
             style={{ backgroundImage: `url(${hero})` }}></div>
      </div>

      <div className="container content">
        <div className="columns">
          <div className="column is-6 is-offset-3">

            <h1 className="title is-size-huge has-text-weight-bold is-uppercase">
              {title}
            </h1>

            <PageContent content={content}/>

          </div>
        </div>
      </div>

    </section>
  );
};

DefaultPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  hero: PropTypes.string,
  helmet: PropTypes.object
};

const DefaultPage = ({ data }) => {

  const { markdownRemark: page } = data;

  return (
    <DefaultPageTemplate
      content={page.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={`${page.frontmatter.title} | Student Hotels`}/>}
      title={page.frontmatter.title}
      hero={page.frontmatter.hero}
    />
  );
};

DefaultPage.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.object
  })
};

export default DefaultPage;

export const defaultPageQuery = graphql`
  query DefaultPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        hero
      }
    }
  }
`;