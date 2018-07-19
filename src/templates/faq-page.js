import React from "react";
import PropTypes from "prop-types";

export const FaqPageTemplate = ({
  title,
  image,
  heading,
  faq
}) => {

  return (
    <faqPage>

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

      <section className="section is-small">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">

              <div className="search-filter">
                <input type="text" className="input is-large" placeholder="Cerca"/>
              </div>

              <div className="faq-list">
                {faq.map( (item, index ) => (
                  <dl key={index} className="faq-item">
                    <dt className="faq-question">{item.question}</dt>
                    <dd className="faq-answer">
                      <blockquote>{item.answer}</blockquote>
                    </dd>
                  </dl>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

    </faqPage>
  );
};

FaqPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  heading: PropTypes.string,
  faq: PropTypes.array
};


const FaqPage = ({ data }) => {

  const { frontmatter } = data.markdownRemark;

  return (
    <FaqPageTemplate
      title={frontmatter.title}
      image={frontmatter.image}
      heading={frontmatter.heading}
      faq={frontmatter.faq}
    />
  );
};

FaqPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default FaqPage;

export const pageQuery = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        faq {
          question
          answer        
        }
      }
    }
  }
`;