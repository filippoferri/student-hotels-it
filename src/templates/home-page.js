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
    const { home: home } = data;
    const { posts: posts } = data;
    const { siteMetadata: api } = data.site;

    return (
      <main>

        <HomeHero content={home.frontmatter}/>

        <FeaturedHotels/>

        <HomeMosaic content={home.frontmatter} api={api.instagramAPI}/>

        <LatestNews content={home.frontmatter} posts={posts.edges}/>

        <Newsletter image={home.frontmatter.newsletterImage.childImageSharp.sizes}/>

        <AnteFooter/>

      </main>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object,
    home: PropTypes.object,
    posts: PropTypes.object
  })
};

export const pageQuery = graphql`
  query IndexQuery($id: String!) {
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
    home: markdownRemark(
      id: { eq: $id }
    ) {
      id
      frontmatter {
        title
        subtitle
        templateKey
        heroImage {
          childImageSharp{
            sizes(maxWidth: 1280) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        mosaic {
          title
          subtitle
        }
        posts {
          title
          subtitle
        }
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
`;