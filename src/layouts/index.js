import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import CookieConsent from "react-cookie-consent";
import Link from "gatsby-link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./all.sass";

import Social from '../img/social_800x800.png';


const TemplateWrapper = ({ children }) => (
  <wrapper>
    <Helmet
      title="Student Hotels Italia: hotel a misura di studente a prezzi economici"
      meta={[
        { name: "description", content: "Student Hotels in Italia da 30€ ✓ Confronta i migliori prezzi ✓ Prenota con facilità ✓ Risparmia fino al 60%" },

        { name: "twitter:site", content: "https://studenthotels.it" },
        { name: "twitter:creator", content: "StudentHotels.it" },
        { name: "twitter:title", content: "Il motore di ricerca degli hotel a misura di studente" },
        { name: "twitter:image", content: Social },

        { property: "og:title", content: "StudentHotels.it"},
        { property: "og:site_name", content: "studenthotels.it" },
        { property: "og:url", content: "https://studenthotels.it" },
        { property: "og:description", content: "Student Hotels in Italia da 40€ ✓ Confronta i migliori prezzi ✓ Prenota con facilità ✓ Risparmia fino al 60%" },
        { property: "og:image", content: Social },
        { property: "og:type", content: "website" },
      ]}
      script={[
        { "src": "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
          "async": "" },
        { innerHTML: `(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-6075875758616092",enable_page_level_ads: true});` }
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