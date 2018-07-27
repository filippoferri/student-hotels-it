import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import heroBg from "../../img/blog-bg.jpg";
import Hero from "../../components/Hero";
import Newsletter from '../../components/Newsletter';
import AnteFooter from '../../components/AnteFooter';

const TagsPage = ({
      data: { allMarkdownRemark: { group },
      site: { siteMetadata: { title } } }
  }) => (
  <main id="blog">

    <Helmet title={`Tags | ${title}`}/>

    <Hero image={heroBg} heading=""/>

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

    <Newsletter />

    <AnteFooter />

  </main>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
