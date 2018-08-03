import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import HotelContentAPI from '../API/HotelContent';
import HotelImagesAPI from '../API/HotelImages';

import Content, { HTMLContent } from '../components/Content';
import HotelHero from '../components/HotelHero';   //<HotelHero locationId={hotel.locationId} heading={this.props.heading}/>
import HotelImages from "../components/HotelImages";
import Map from '../components/Map'; //<Map location={hotel.location} />
import FindBooking from '../components/FindBooking'
import Newsletter from '../components/Newsletter';
import AnteFooter from '../components/AnteFooter';

class HotelPageTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hotel: null,
      images: null
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

          <section className="section">
            <div className="container">
              <div className="columns is-6-desktop">
                <div className="column is-7 is-offset-1">

                  <div className="sh-hotel-header">
                    <h2 className="title is-size-4">{hotel.label}</h2>
                    <span style={{'marginRight': '1rem'}}>{this.props.address}</span>
                    <Link to="#map"><span>Mappa</span></Link>
                  </div>

                  {images ?
                    <div className="sh-hotel-gallery">
                      <HotelImages data={images} hotelId={hotel.id} />
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
                <div className="column is-3 has-border-left is-centered">

                  <FindBooking locationId={hotel.locationId} hotelId={hotel.id}/>

                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="columns is-6-desktop">
                <div className="column is-10-desktop is-offset-1-desktop">
                  <div className="sh-hotel-map has-background-black">

                  </div>
                </div>
              </div>
            </div>

          </section>

        </main> : <main className="is-loader"></main>
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
  helmet: PropTypes.object
};

const HotelDetails = ({ data }) => {
  const { markdownRemark: hotel } = data;

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
    />
  );
};

HotelDetails.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default HotelDetails;

export const pageQuery = graphql`
  query HotelPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
  }
`;
