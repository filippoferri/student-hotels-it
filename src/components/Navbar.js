import React from 'react'
import Link from 'gatsby-link'
import BodyClassName from 'react-body-classname';

import PropTypes from 'prop-types';

import logo from '../img/logo.svg';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.expandedMenu = this.expandedMenu.bind(this);
    this.collapsedMenu = this.collapsedMenu.bind(this);
  }

  expandedMenu() {
    this.setState({ active: true });
  }

  collapsedMenu() {
    this.setState({ active: false });
  }

  getMenuDiv() {
    if (this.state.active) {
      return (
        <BodyClassName className="has-overflow-hidden"/>
          );
    } else {
      return null
    }
  }

  render() {
    var expandedMenu = this.getMenuDiv();
    const isActive = this.state.active

    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img className="logo" src={logo} alt="Student Hotels Italia" />
              </figure>
            </Link>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={this.expandedMenu}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </div>

        {expandedMenu}

        <div className={"sh-modal" + (!isActive ? '' : ' is-open')}>
          <div className="sh-off-menu" onClick={this.collapsedMenu}></div>
          <div className="sh-main-menu">
            <div className="sh-scroll-container">

              <a role="button" className="navbar-burger is-active" aria-label="menu" aria-expanded="false"
                 onClick={this.collapsedMenu}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>

              <nav className="sh-nav-wrapper">

                <header>Menu</header>

                <div className="sh-nav-list">
                  <Link className="sh-nav-link" to="/chi-siamo" onClick={this.collapsedMenu}>Chi siamo</Link>
                  <Link className="sh-nav-link" to="/mission" onClick={this.collapsedMenu}>Mission</Link>
                  <Link className="sh-nav-link" to="/faq" onClick={this.collapsedMenu}>Faq</Link>
                  <Link className="sh-nav-link" to="/blog" onClick={this.collapsedMenu}>Blog</Link>
                  <Link className="sh-nav-link" to="/contatti" onClick={this.collapsedMenu}>Contatti</Link>
                </div>
                
                <div className="sh-nav-copy">&copy; 2018 Studenthotels.it</div>
                
                <footer>
                  <div className="columns is-mobile">
                    <div className="column is-one-third-mobile">
                      <Link to="/note-legali/condizioni-generali" onClick={this.collapsedMenu}>Condizioni</Link>
                    </div>
                    <div className="column is-one-third-mobile has-text-centered">
                      <Link to="/note-legali/termini-utilizzo" onClick={this.collapsedMenu}>Utilizzo</Link>
                    </div>
                    <div className="column is-one-third-mobile has-text-right">
                      <Link to="/note-legali/informativa-privacy" onClick={this.collapsedMenu}>Privacy</Link>
                    </div>
                  </div>
                </footer>

              </nav>

            </div>
          </div>
        </div>

      </nav>
    )
  }
}

export default Navbar;

Navbar.propTypes = {
  active: PropTypes.bool
};