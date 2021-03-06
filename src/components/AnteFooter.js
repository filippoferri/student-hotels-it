import React from "react";
import Link from "gatsby-link";

import logo from "../img/logo-footer.svg";

const AnteFooter = () => (
  <section className="section ante-footer is-medium">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-one-quarter-desktop is-centered is-hidden-touch">
          <div className="ante-footer-brand ">
            <Link to="/">
              <figure className="image is-block-centered is-inline-block">
                <img className="logo-footer" src={logo} alt="Student Hotels Italia"/>
              </figure>
            </Link>
          </div>
        </div>
        <div className="column is-one-third-tablet is-one-quarter-desktop">
          <h5 className="menu-label">Student Hotels</h5>
          <nav>
            <ul className="menu-list">
              <li><Link to="/chi-siamo">Chi siamo</Link></li>
              <li><Link to="/mission">Mission</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>
        </div>
        <div className="column is-one-third-tablet is-one-quarter-desktop">
          <h5 className="menu-label">Informazioni</h5>
          <nav>
            <ul className="menu-list">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/lavora-con-noi">Lavora con noi</Link></li>
              <li><Link to="/contatti">Contatti</Link></li>
            </ul>
          </nav>
        </div>
        <div className="column is-one-third-tablet is-one-quarter-desktop">
          <h5 className="menu-label">Note legali</h5>
          <nav>
            <ul className="menu-list">
              <li><Link to="/note-legali/condizioni-generali">Condizioni generali</Link></li>
              <li><Link to="/note-legali/termini-utilizzo">Termini di utilizzo</Link></li>
              <li><Link to="/note-legali/informativa-privacy">Informativa Privacy</Link></li>
              <li><Link to="/note-legali/informativa-newsletter">Informativa newsletter</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
);

export default AnteFooter;
