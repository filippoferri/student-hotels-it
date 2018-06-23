import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ data }) => (
  <section className="hero is-primary is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Large title
        </h1>
        <h2 className="subtitle">
          Large subtitle
        </h2>
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
