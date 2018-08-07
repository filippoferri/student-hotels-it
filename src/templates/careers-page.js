import React from 'react';
import PropTypes from 'prop-types';

import BlockTextBoard from '../components/BlockTextBoard';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import AnteFooter from '../components/AnteFooter';

export const CareersPageTemplate = ({
    title,
    heroImage,
    heading,
    board,
    positions,
    newsletterImage
  }) => {

  return (
    <main>

      <Hero image={heroImage.childImageSharp.sizes} heading={heading} />

      <BlockTextBoard content={board} style={"white-ter"}/>

      <section className="section">
        <div className="container">

          <h3 className="title is-3 is-centered">Posizioni aperte</h3>

          <div className="columns">

            {positions.map((item, index) => (
              <div className="column">
                <div className="notification is-button is-black">
                  <a href="/"></a>
                  <dl key={index} className="pos-item">
                    <dt className="pos-role">{item.role}</dt>
                    <dd className="pos-desc">
                      <blockquote>{item.description}</blockquote>
                    </dd>
                  </dl>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      
      <section className="section is-medium">
        <div className="container is-centered">
          <span className="title  is-5">Non vedi nessuna posizione aperta di tuo interesse? <a href="/">Fatti sentire in ogni caso</a> </span>
        </div>
      </section>

      <Newsletter image={newsletterImage.childImageSharp.sizes}/>

      <AnteFooter />

    </main>
  );
};

CareersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  image: PropTypes.string,
  board: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  }),
  positions: PropTypes.shape({
    role: PropTypes.string,
    description: PropTypes.string
  })
};

const CareersPage = ({ data }) => {
  const { current: post } = data;
  const { newsletter: newsletter } = data;
  const image = newsletter.edges[0].node;

  return (
    <CareersPageTemplate
      title={post.frontmatter.title}
      heroImage={post.frontmatter.heroImage}
      heading={post.frontmatter.heading}
      board={post.frontmatter.board}
      positions={post.frontmatter.positions}
      newsletterImage={image.frontmatter.newsletterImage}
    />
  );
};

CareersPage.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.object,
    newsletter: PropTypes.object
  })
};

export default CareersPage;

export const pageQuery = graphql`
  query CareersPage($id: String!) {
    current: markdownRemark(id: { eq: $id }) {
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
        heading
        board {
          heading
          description
        }
        positions {
          role
          description        
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
