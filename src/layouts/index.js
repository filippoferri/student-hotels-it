import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import AnteFooter from '../components/AnteFooter'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <mainWrapper>
    <Helmet title="Student Hotels Italia: hotels a misura di studente" />
    <Navbar />
    {children()}
    <Newsletter />
    <AnteFooter />
    <Footer />
  </mainWrapper>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
