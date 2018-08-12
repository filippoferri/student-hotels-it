import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import Hero from "../../components/Hero";
import Newsletter from "../../components/Newsletter";
import AnteFooter from "../../components/AnteFooter";

const DestinationsPage = ({
    data: {
      destinations: { group },
      site: { siteMetadata: { title } },
      newsletter: { edges }
    }
  }) => (
  <main>

    <Helmet title={`Destinazioni | ${title}`}/>

    <section className="section">
      <div className="container has-margin-bottom has-margin-top">
        <div className="columns is-multiline">
          {group.map(destination => (
            <div className="column is-one-third"
                 key={destination.fieldValue}>
              <Link to={`/destinazioni/${kebabCase(destination.fieldValue)}/`}>
                {destination.fieldValue} ({destination.totalCount})
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Newsletter image={edges[0].node.frontmatter.newsletterImage.childImageSharp.sizes}/>

    <AnteFooter/>

  </main>
);

export default DestinationsPage;

export const destinationPageQuery = graphql`
  query DestinationsQuery {
    site {
      siteMetadata {
        title
      }
    }
    destinations: allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___destinations) {
        fieldValue
        totalCount
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
