import React from "react";
import PropTypes from "prop-types";

export const ContactPageTemplate = ({
                                      title,
                                      image,
                                      heading
                                    }) => {

  return (
    <contactPage>

      <section className="hero is-medium is-primary background-image"
               style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h1 className="title">
                  {heading}
                </h1>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="section is-medium">
        <div className="container">

          <h2 className="title is-4 is-centered">Hai bisogno di aiuto?</h2>

          <div className="columns">

            <div className="column is-6 is-offset-3">

              <form name="contact" netlify>

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

                <div className="control is-grouped-right">
                  <button type="submit" className="button is-primary is-large">Invia</button>
                </div>
              </form>

            </div>


          </div>
        </div>
      </section>

    </contactPage>
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
      image={post.frontmatter.image}
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
        image
        heading
      }
    }
  }
`;
