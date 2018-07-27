import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Content, { HTMLContent } from '../components/Content';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import AnteFooter from '../components/AnteFooter';

export const DefaultPageTemplate = ({
    content,
    contentComponent,
    title,
    hero,
    helmet
  }) => {

  const PageContent = contentComponent || Content;

  return (
    <main className="default-page">
      {helmet || ""}

      <Hero image={hero} heading={title}/>

      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-6-desktop is-offset-3-desktop">

              <PageContent content={content}/>

            </div>
          </div>
        </div>
      </section>

      <Newsletter />

      <AnteFooter />

    </main>
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
