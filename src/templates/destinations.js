import React from "react";
import Helmet from "react-helmet";

import Hero from "../components/DestinationHero";
import Newsletter from "../components/Newsletter";
import AnteFooter from "../components/AnteFooter";
import Link from "gatsby-link";

class DestinationRoute extends React.Component {

  stars(num) {
    let stars = [];
    _.times(num, (i) => {
      stars.push(<i key={i}></i>);
    })
    return stars
  }

  render() {
    // Hotels data
    const { data } = this.props;
    const hotels = data.hotels.edges;
    // Find image for newsletter
    const newsletterImage = data.newsletter.edges[0].node.frontmatter.newsletterImage;
    // Find destination name
    const destination = this.props.pathContext.destination;
    // Is title for Helmet
    const title = this.props.data.site.siteMetadata.title;
    // Total Count of hotels for this tag
    const totalCount = data.hotels.totalCount;

    return (
      <main>

        <Helmet title={`${destination} | ${title}`}><html lang="it" /></Helmet>

        <Hero destination={destination} heading={destination}/>

        <section className="section">
          <div className="container has-margin-bottom has-margin-top">
            <div className="sh-list-header"><span className="title is-4">{totalCount} Student Hotel</span></div>
            <div className="columns is-multiline">

              <div className="column is-4">

                {hotels.map((hotel, i) =>
                  <div className="sh-hotel-list-item" key={i}>
                    <div className="img-container">
                      <div className="is-image-wrapper">
                        <Link className="sh-blog-link" to={hotel.node.fields.slug}>
                          <img src={hotel.node.frontmatter.details[0].image}/>
                        </Link>
                      </div>
                    </div>
                    <div className="">
                      <div className="sh-second-block">
                        <div className="is-flex">
                          <div className="sh-hotel-stars">{this.stars(hotel.node.frontmatter.details[0].stars)}</div>
                          <div className="has-text-right"><span
                            className="sh-hotel-rating">{hotel.node.frontmatter.details[0].rating}</span></div>
                        </div>
                        <Link className="sh-blog-link" to={hotel.node.fields.slug}><span
                          className="title is-5">{hotel.node.frontmatter.title}</span></Link>
                        <div className="has-text-small"><span>Da {hotel.node.frontmatter.details[0].pricefrom}&euro; a notte</span></div>
                      </div>
                    </div>
                  </div>
                )}

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
            details {
              rating
              stars
              pricefrom
              image
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

