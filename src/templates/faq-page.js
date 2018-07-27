import React from 'react';
import PropTypes from 'prop-types';
import { createFilter } from 'react-search-input';

import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import AnteFooter from '../components/AnteFooter';

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
      <main>

        <Hero image={this.props.image} heading={this.props.heading} />

        <section className="section is-small">
          <div className="container">
            <div className="columns">
              <div className="column is-6-desktop is-offset-3-desktop">

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

        <Newsletter />

        <AnteFooter />

      </main>
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