import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import AnteFooter from "../components/AnteFooter";

const TagsPage = ({
    data: {
      tags: { group },
      hometags: {frontmatter},
      site: { siteMetadata: { title } },
      newsletter: { edges }
    }
  }) => (
  <main id="blog">

    <Helmet title={`Tags | ${title}`}><html lang="it" /></Helmet>

    <Hero image={frontmatter.heroImage.childImageSharp.sizes} heading=""/>

    <section className="section">
      <div className="container has-margin-bottom has-margin-top">
        <div className="columns is-multiline">
          {group.map(tag => (
            <div className="column is-one-third"
                 key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
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

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    tags: allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    hometags: markdownRemark(
      id: { eq: $id }
    ) {
      id
      frontmatter {
        title
        templateKey
        heroImage {
          childImageSharp{
            sizes(maxWidth: 1280) {
              ...GatsbyImageSharpSizes
            }
          }
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
