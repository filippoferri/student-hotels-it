import React from "react";
import PropTypes from "prop-types";


import Hero from "../components/Hero";
import HomeMosaic from "../components/HomeMosaic";
import JoinCommunity from "../components/JoinCommunity";
import LatestNews from "../components/LatestNews";


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    //const { instagramAPI: api } = data.site.siteMetadata;

    return (
      <main>
        <Hero/>
        <HomeMosaic/>
        <LatestNews posts={posts}/>
      </main>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
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
    allMarkdownRemark(
      limit: 3
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
          }
        }
      }
    }
  }
`;