import React from "react";
import Link from "gatsby-link";

import logo from "../img/logo-footer.svg";

const AnteFooter = () => (
  <section className="section ante-footer is-medium">
    <div className="container">
      <div className="columns">
        <div className="column is-centered">
          <div className="ante-footer-brand ">
            <Link to="/">
              <figure className="image">
                <img className="logo-footer" src={logo} alt="Student Hotels Italia"/>
              </figure>
            </Link>
          </div>
        </div>
        <div className="column">
          <h5 className="menu-label">Student Hotels</h5>
          <nav>
            <ul className="menu-list">
              <li><Link to="/">Chi siamo</Link></li>
              <li><Link to="/">Concetto</Link></li>
              <li><Link to="/">News</Link></li>
              <li><Link to="/">Eventi</Link></li>
            </ul>
          </nav>
        </div>
        <div className="column">
          <h5 className="menu-label">Informazioni</h5>
          <nav>
            <ul className="menu-list">
              <li><Link to="/">FAQ</Link></li>
              <li><Link to="/">Lavora con noi</Link></li>
              <li><Link to="/">Area Stampa</Link></li>
              <li><Link to="/">Contatti</Link></li>
            </ul>
          </nav>
        </div>
        <div className="column">
          <h5 className="menu-label">Note legali</h5>
          <nav>
            <ul className="menu-list">
              <li><Link to="/">Termini di utilizzo</Link></li>
              <li><Link to="/">Condizioni generali</Link></li>
              <li><Link to="/">Privacy Policy & Cookies</Link></li>
              <li><Link to="/">Informativa newsletter</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
);

export default AnteFooter;
