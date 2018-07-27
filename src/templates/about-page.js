import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Content, { HTMLContent } from '../components/Content';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter'
import AnteFooter from '../components/AnteFooter'

export const AboutPageTemplate = ({
    title,
    image,
    heading,
    content,
    contentComponent
  }) => {
  const PageContent = contentComponent || Content;

  return (
    <main>

      <Hero image={image} heading={heading}/>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6-desktop is-offset-3-desktop">
              <PageContent className="content" content={content}/>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <AnteFooter />

    </main>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  image: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      heading={post.frontmatter.heading}
      content={post.html}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
        heading
      }
    }
  }
`;
