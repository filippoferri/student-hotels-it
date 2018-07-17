import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({
                                    title,
                                    image,
                                    heading,
                                    content,
                                    contentComponent
                                  }) => {
  const PageContent = contentComponent || Content;

  return (
    <aboutPage>

      <section className="hero is-medium is-primary background-image"
               style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h1 className="title">
                  {heading}
                </h1>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <div className="section">
                <PageContent className="content" content={content}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </aboutPage>
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
