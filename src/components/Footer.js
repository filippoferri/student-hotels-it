import React from 'react'

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => (
  <footer className="footer is-dark">
    <div className="content has-text-centered">
      <div>
        Copyright &copy; { getYear() } Student Hotels. Tutti i diritti riservati.
      </div>
    </div>
  </footer>
)

export default Footer
