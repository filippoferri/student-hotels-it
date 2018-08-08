import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Moment from "moment";
import { Link, DirectLink } from "react-scroll";

import HotelContentAPI from "../API/HotelContent";
import HotelImagesAPI from "../API/HotelImages";

import Content, { HTMLContent } from "../components/Content";
import HotelHero from "../components/HotelHero";
import HotelImages from "../components/HotelImages";
import Map from "../components/Map";
import FindBooking from "../components/FindBooking";
import Newsletter from "../components/Newsletter";
import AnteFooter from "../components/AnteFooter";

class HotelPageTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hotel: null,
      images: null,
      checkIn: this.dayCalc(10),
      checkOut: this.dayCalc(11)
    };
  }

  componentDidMount() {

    HotelContentAPI(this.props.hotelId).then(
      result => this.setState({
        hotel: result
      })
    );

    HotelImagesAPI(this.props.hotelId).then(
      result => this.setState({
        images: result
      })
    );
  }

  dayCalc(num) {
    const today = new Date;
    const newDate = Moment(today, "DD-MM-YYYY").add(num, "days");
    const day = newDate.format("DD");
    const month = newDate.format("MM");
    const year = newDate.format("YYYY");
    return (year + "-" + month + "-" + day);
  }

  takeCity(location) {
    return location.substr(0, location.indexOf(","));
  }

  render() {
    const { hotel } = this.state;
    const { images } = this.state;

    const facilities = this.props.facilities;
    const facilitiesDiv = facilities.map((item, index) => (
      <li key={index}>{item}</li>
    ));
    const Info = this.props.contentComponent || Content;

    return (
      hotel ?
        <main>

          <HotelHero locationId={hotel.locationId} heading={this.props.heading}/>

          <section className="section">
            <div className="container">
              <div className="columns is-6-desktop">
                <div className="column is-7-tablet is-8-desktop is-7-widescreen is-offset-1-widescreen">

                  <div className="sh-hotel-header">
                    <h2 className="title is-size-4">{hotel.label}</h2>
                    <span style={{ "marginRight": "1rem" }}>{this.props.address}</span>
                    <Link activeClass="active" to="map" smooth={true} offset={-50}><span
                      className="has-text-primary">Mappa</span></Link>
                  </div>

                  {images ?
                    <div className="sh-hotel-gallery">
                      <HotelImages data={images} hotelId={hotel.id}/>
                    </div>
                    : null}

                  <div className="sh-hotel-services">

                    <div className="columns">
                      <div className="column is-3-tablet">
                        <h3 className="is-size-5 has-text-weight-bold">Servizi</h3>
                      </div>
                      <div className="column is-9-tablet">
                        <ul className="sh-hotel-services-list">
                          {facilitiesDiv}
                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="sh-hotel-info">

                    <div className="columns">
                      <div className="column is-3-tablet">
                        <h3 className="is-size-5 has-text-weight-bold">Info</h3>
                      </div>
                      <div className="column is-9-tablet content has-text-smaller margin-top-0">
                        <Info content={this.props.content}/>
                      </div>
                    </div>

                  </div>

                </div>
                <div className="column is-5-tablet is-4-desktop is-3-widescreen has-border-left is-centered">

                  <FindBooking locationId={hotel.locationId}
                               hotelId={hotel.id}
                               checkIn={this.state.checkIn}
                               checkOut={this.state.checkOut}/>

                  <div className="has-text-left">
                    <div className="notification has-background-black has-text-white">
                      <p className="heading">Soluzioni per studenti</p>
                      <p className="has-text-small">Disponibilità di soggiorni di 4, 8, 9, 10 o 12 mesi per godere a
                        pieno l'esperienza di uno student hotel a {this.takeCity(hotel.locationName)}.</p>
                    </div>

                    <div className="notification has-background-black has-text-white">
                      <p className="heading">Soggiorno prolungato</p>
                      <p className="has-text-small">Soluzioni di soggiorni con camere singole o condivise da due
                        settimane a un anno per vivere e studiare a {this.takeCity(hotel.locationName)}.</p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </section>

          <section className="section element" name="map">
            <div className="container">
              <div className="columns is-6-desktop">
                <div className="column is-10-desktop is-offset-1-desktop">
                  <div className="sh-hotel-map has-background-black">
                    <Map location={hotel.location}/>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <Newsletter image={this.props.newsletterImage.childImageSharp.sizes}/>

          <AnteFooter/>

        </main> : <main className="is-loader-wrapper has-text-black">
          <div className="cont">
            <div className="dot" id="dot-1"></div>
            <div className="dot" id="dot-2"></div>
            <div className="dot" id="dot-3"></div>
          </div>
        </main>
    );
  }
}

HotelPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  heading: PropTypes.string,
  hotelId: PropTypes.number,
  address: PropTypes.string,
  info: PropTypes.string,
  helmet: PropTypes.object,
  hotel: PropTypes.object,
  images: PropTypes.object
};

const HotelDetails = ({ data }) => {

  const { current: hotel } = data;
  const { newsletter: newsletter } = data;
  const image = newsletter.edges[0].node;

  return (
    <HotelPageTemplate
      content={hotel.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={`${hotel.frontmatter.title} | Student Hotels`}/>}
      tags={hotel.frontmatter.tags}
      facilities={hotel.frontmatter.facilities}
      title={hotel.frontmatter.title}
      hotelId={hotel.frontmatter.hotelId}
      address={hotel.frontmatter.address}
      heading={hotel.frontmatter.heading}
      newsletterImage={image.frontmatter.newsletterImage}
    />
  );
};

HotelDetails.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.object
  })
};

export default HotelDetails;

export const pageQuery = graphql`
  query HotelPostByID($id: String!) {
    current: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        heading
        hotelId
        address
        facilities
        tags
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
