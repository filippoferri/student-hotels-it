import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img className="logo" src={logo} alt="Student Hotels Italia" />
          </figure>
        </Link>
      </div>
      <div className="navbar-start"></div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
        <Link className="navbar-item" to="/mission">
          Mission
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
