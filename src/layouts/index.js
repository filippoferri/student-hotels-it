import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import CookieConsent from "react-cookie-consent";
import Link from "gatsby-link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <wrapper>
    <Helmet
      title="Student Hotels Italia: hotel a misura di studente a prezzi convenienti"
      meta={[
        { name: "description", content: "Student Hotels - Il motore di ricerca per strutture alberghiere con tutti i comfort per studenti" },

        { name: "twitter:site", content: "studenthotels.it" },
        { name: "twitter:creator", content: "StudentHotels.it" },
        { name: "twitter:title", content: "Student Hotels Italia: il motore di ricerca degli hotel a misura di studente" },
        { name: "twitter:image", content: "https://studenthotels.it/static/logo-footer.73a0979d.svg" },

        { property: "og:title", content: "Student Hotels Italia: il motore di ricerca degli hotel a misura di studente"
        },
        { property: "og:site_name", content: "studenthotels.it" },
        { property: "og:type", content: "website" },
        { property: "og:description", content: "Student Hotels - Il motore di ricerca per strutture alberghiere con tutti i comfort per studenti" },
        { property: "og:image", content: "https://studenthotels.it/static/logo-footer.73a0979d.svg" },
        { property: "og:site_name", content: "StudentHotels.it" }
      ]}
    />
    <Navbar/>
    {children()}
    <Footer/>

    <CookieConsent
      location="bottom"
      acceptOnScroll={true}
      acceptOnScrollPercentage={25}
      cookieName="StudentHotels"
      disableStyles={true}

      buttonClasses="sh-cookie-bar-close"
      containerClasses="sh-cookie-bar-container"
      contentClasses=""

      buttonText="×"
      extraCookieOptions={{domain: '//studenthotels.it'}}
      debug={true}>
      Questo sito utilizza i cookie. Per maggiori informazioni, clicca <Link to="note-legali/informativa-privacy">qui</Link>. Se per te va bene, continua a navigare.
    </CookieConsent>
  </wrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;