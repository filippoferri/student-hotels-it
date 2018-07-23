import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";

export const HotelPageTemplate = ({
                                    content,
                                    contentComponent,
                                    tags,
                                    title,
                                    image,
                                    heading,
                                    helmet
                                  }) => {

  const PostContent = contentComponent || Content;

  return (
    <hotelPage>

      {helmet || ""}

      <section className="hero is-medium is-primary background-image"
               style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h1 className="title">{heading}</h1>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-6">
            <div className="column is-6 is-offset-1">

              <div className="sh-hotel-header">
                <h2 className="title is-size-4">{title}</h2>
                <span>Via Da qualche parte</span>
                <Link to="#map"><span>Mappa</span></Link>
                <div>Stelle</div>
              </div>

              <div className="sh-hotel-gallery">
                <img
                  style={{ borderRadius: "4px" }}
                  src={image}
                  alt={title}
                />
              </div>

              <div className="sh-hotel-services">

                <div className="columns">
                  <div className="column is-3">
                    <h3 className="is-size-5 has-text-weight-bold">Servizi</h3>
                  </div>
                  <div className="column is-9">
                    <ul className="sh-hotel-services-list">
                      <li>Business Center</li>
                      <li>Bar/Loiunge</li>
                      <li>Business Center</li>
                      <li>Bar/Loiunge</li>
                    </ul>
                  </div>
                </div>

              </div>

              <div className="sh-hotel-info">

                <div className="columns">
                  <div className="column is-3">
                    <h3 className="is-size-5 has-text-weight-bold">Info</h3>
                  </div>
                  <div className="column is-9 content margin-top-0">
                    <PostContent content={content}/>
                  </div>
                </div>

              </div>


            </div>
            <div className="column is-3 is-offset-1 has-border-left is-centered">


              <button type="button" className="button is-medium is-primary is-fullwidth">Validità</button>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="sh-hotel-map has-background-black">

            </div>
          </div>
        </div>

      </section>

    </hotelPage>
  );
};

HotelPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  heading: PropTypes.string,
  image: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const HotelDetails = ({ data }) => {
  const { markdownRemark: hotel } = data;

  return (
    <HotelPageTemplate
      content={hotel.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={`${hotel.frontmatter.title} | Student Hotels`}/>}
      tags={hotel.frontmatter.tags}
      title={hotel.frontmatter.title}
      image={hotel.frontmatter.hero}
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
        date(formatString: "MMMM DD, YYYY")
        title
        hero
        heading
        tags
      }
    }
  }
`;
