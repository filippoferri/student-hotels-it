import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import Newsletter from "../components/Newsletter";
import AnteFooter from "../components/AnteFooter";

class DestinationRoute extends React.Component {
  render() {
    const { data } = this.props;
    const hotels = data.hotels.edges;
    const newsletterImage = data.newsletter.edges[0].node.frontmatter.newsletterImage;

    const hotelLinks = hotels.map(hotel => (
      <div key={hotel.node.fields.slug}>
        <div className="notification">
          <Link className="sh-blog-link" to={hotel.node.fields.slug}><span className="title is-uppercase is-3">{hotel.node.frontmatter.title}</span></Link>
        </div>
      </div>
    ));
    const destination = this.props.pathContext.destination;

    const title = this.props.data.site.siteMetadata.title;

    const totalCount = data.hotels.totalCount;

    return (
      <main>

        <Helmet title={`${destination} | ${title}`}/>

        <div className="has-background-black" style={{'height': '4rem'}}></div>

        <section className="section">
          <div className="container has-margin-bottom has-margin-top">
            <div className="columns">

              <div className="column is-2">
                filtri
              </div>

              <div className="column is-8">

              {hotelLinks}

              </div>

            </div>
          </div>
        </section>

        <Newsletter image={newsletterImage.childImageSharp.sizes}/>

        <AnteFooter/>

      </main>
    );
  }
}

export default DestinationRoute;

export const destinationPageQuery = graphql`
  query DestinationPage($destination: String) {
    site {
      siteMetadata {
        title
      }
    }
    hotels: allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { destinations: { in: [$destination] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            title
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

