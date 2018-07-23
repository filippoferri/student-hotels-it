import React from "react";
import PropTypes from "prop-types";
import { createFilter } from "react-search-input";

const KEYS_TO_FILTERS = ['question', 'answer'];

class FaqPageTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {

    const filteredFaq = this.props.faq.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    return (
      <faqPage>

        <section className="hero is-medium is-primary background-image"
                 style={{ backgroundImage: `url(${this.props.image})` }}>
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <h1 className="title">
                    {this.props.heading}
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
                  <input type="text" className="input" placeholder="Cerca" onChange={this.searchUpdated} />
                </div>

                <div className="faq-list">
                {filteredFaq.map((item, index) => {
                  return (
                    <dl className="faq-item" key={index}>
                      <dt className="faq-question">{item.question}</dt>
                      <dd className="faq-answer">
                        <blockquote>{item.answer}</blockquote>
                        </dd>
                    </dl>
                  );
                })}
                </div>

              </div>
            </div>
          </div>
        </section>

      </faqPage>
    );
  }
}

FaqPageTemplate.propTypes = {
  searchTerm: PropTypes.string,
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