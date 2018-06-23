import React from 'react'

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <div>
        &copy; { getYear() } Student Hotels Italia. Tutti i diritti riservati.
      </div>
    </div>
  </footer>
)

export default Footer
