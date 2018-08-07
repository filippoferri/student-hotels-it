import React from "react";
import PropTypes from "prop-types";

import HomeHero from "../components/HomeHero";
import HomeMosaic from "../components/HomeMosaic";
import FeaturedHotels from "../components/FeaturedHotels";
import LatestNews from "../components/LatestNews";
import Newsletter from "../components/Newsletter";
import AnteFooter from "../components/AnteFooter";


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { posts: posts } = data;
    const { siteMetadata: api } = data.site;

    return (
      <main>

        <HomeHero/>

        <FeaturedHotels/>

        <HomeMosaic api={api.instagramAPI}/>

        <LatestNews posts={posts.edges}/>

        <Newsletter/>

        <AnteFooter/>

      </main>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.array
    }),
    posts: PropTypes.object
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        instagramAPI {
          userId
          clientId
          accessToken
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 4
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } },
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD MMMM, YYYY", locale: "it")
            heroImage {
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