import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import CookieConsent from "react-cookie-consent";
import Link from "gatsby-link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./all.sass";

import Social from '../img/social_800x800.png';

const socialImg = Social;

const TemplateWrapper = ({ children }) => (
  <wrapper>

    <Helmet
      title="Student Hotels: hotel a misura di studente a prezzi economici"
      meta={[
        { name: "description", content: "Student Hotels in Italia da 30€ ✓ Confronta i migliori prezzi ✓ Prenota con facilità ✓ Risparmia fino al 60%" },

        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@studenthotels" },
        { name: "twitter:title", content: "Il motore di ricerca degli hotel a misura di studente" },
        { name: "twitter:description", content: "Student Hotels in Italia da 30€ ✓ Confronta i migliori prezzi ✓ Prenota con facilità ✓ Risparmia fino al 60%" },
        { name: "twitter:author", content:  "@studenthotels"  },
        { name: "twitter:image", content:  socialImg },

        { property: "og:title", content: "Student Hotels: hotel a misura di studente a prezzi economici"},
        { property: "og:type", content: "article" },
        { property: "og:url", content: "https://studenthotels.it" },
        { property: "og:image", content: socialImg },
        { property: "og:description", content: "Student Hotels in Italia da 40€ ✓ Confronta i migliori prezzi ✓ Prenota con facilità ✓ Risparmia fino al 60%" },
        { property: "og:site_name", content: "studenthotels.it" },
        { property: "og:author", content: "https://www.facebook.com/studenthotels" },
        { property: "fb:admins", content: "271106406768998" }
      ]}
    ><html lang="it" /></Helmet>
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
      extraCookieOptions={{domain: '//studenthotels.it'}}>
      Questo sito utilizza i cookie. Per maggiori informazioni, clicca <Link to="/note-legali/informativa-privacy">qui</Link>. Se per te va bene, continua a navigare StudentHotels.
    </CookieConsent>
  </wrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;