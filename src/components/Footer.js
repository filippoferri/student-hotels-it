import React from 'react'
import Link from 'gatsby-link'

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => (
  <footer className="footer is-dark">
    <div className="has-text-centered">
      <div>
        Copyright &copy; { getYear() } <Link to="https://studenthotels.it">Student Hotels</Link>. Tutti i diritti riservati.
      </div>
    </div>
  </footer>
)

export default Footer
