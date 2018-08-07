import React from "react";
import PropTypes from "prop-types";

import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import AnteFooter from '../components/AnteFooter';

export const ContactPageTemplate = ({
    title,
    heroImage,
    heading
  }) => {

  return (
    <main className="contact-page">

      <Hero image={heroImage.childImageSharp.sizes} heading={heading} />

      <section className="section">

        <div className="container">

          <h2 className="title is-4 is-centered">Hai bisogno di aiuto?</h2>

          <div className="columns">

            <div className="column is-6-desktop is-offset-3-desktop">

              <form name="contact" method="POST" netlify>

                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input className="input is-large" type="text" name="name" placeholder="Nome"/>
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input is-large" type="text" name="surname" placeholder="Cognome"/>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="email" name="email" placeholder="Email"/>
                  </div>
                </div>

                <div className="field">
                <div className="control">
                  <div className="select is-large">
                    <select name="subject">
                      <option>Informazioni Hotel</option>
                      <option>Informazioni Spazi per studenti</option>
                      <option>Altro</option>
                    </select>
                  </div>
                </div>
                </div>

                <div className="field">
                  <div className="control">
                    <textarea className="textarea is-large" name="message" placeholder="Come possiamo aiutarti?"></textarea>
                  </div>
                </div>

                <div data-netlify-recaptcha></div>

                <div className="control is-grouped-right">
                  <button type="submit" className="button is-primary is-large">Invia</button>
                </div>
              </form>

            </div>


          </div>
        </div>
      </section>

      <Newsletter />

      <AnteFooter />

    </main>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  image: PropTypes.string
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ContactPageTemplate
      title={post.frontmatter.title}
      heroImage={post.frontmatter.heroImage}
      heading={post.frontmatter.heading}
    />
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heroImage {
          childImageSharp {
            sizes(maxWidth: 1280) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        heading
      }
    }
  }
`;
