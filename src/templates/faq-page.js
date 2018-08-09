import React from 'react';
import PropTypes from 'prop-types';
import { createFilter } from 'react-search-input';

import Helmet from "react-helmet";
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

        {this.props.helmet || ""}

        <Hero image={this.props.heroImage.childImageSharp.sizes} heading={this.props.heading} />

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

        <Newsletter image={this.props.newsletterImage.childImageSharp.sizes} />

        <AnteFooter />

      </main>
    );
  }
}

FaqPageTemplate.propTypes = {
  searchTerm: PropTypes.string,
};

const FaqPage = ({ data }) => {

  const { frontmatter } = data.current;
  const { newsletter: newsletter } = data;
  const image = newsletter.edges[0].node;

  return (
    <FaqPageTemplate
      helmet={<Helmet title={`${frontmatter.title} | Student Hotels`}/>}
      title={frontmatter.title}
      heroImage={frontmatter.heroImage}
      heading={frontmatter.heading}
      faq={frontmatter.faq}
      newsletterImage={image.frontmatter.newsletterImage}
    />
  );
};

FaqPage.propTypes = {
  current: PropTypes.object,
  newsletter: PropTypes.object
};

export default FaqPage;

export const pageQuery = graphql`
  query FaqPage($id: String!) {
    current: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heroImage {
          childImageSharp {
            sizes(maxWidth: 1280) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        heading
        faq {
          question
          answer        
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