import React from 'react'
import PropTypes from 'prop-types'

const Hero = () => (
  <section className="hero is-primary is-fullheight">
    <div className="hero-body">
      <div className="container is-centered">
        <h1 className="title is-uppercase">
          Hotels a misura di studente
        </h1>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
}

export default Hero
