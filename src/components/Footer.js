import React from "react";

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => (
  <footer className="footer is-dark">
    <div className="has-text-centered">
      <div>
        &copy; {getYear()} <a href="https://studenthotels.it" target="_blank">Student Hotels</a>. Tutti i diritti
        riservati.
      </div>
    </div>
  </footer>
);

export default Footer;
