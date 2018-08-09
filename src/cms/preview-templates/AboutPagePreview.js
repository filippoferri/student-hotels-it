import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/default'

const AboutPagePreview = ({ entry, fields, widgetFor }) => {
  const rawMediaPath = fields.getIn([4, 'rawMediaPath']);
  return (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    image={entry.getIn(['data', 'heroImage']).replace('../../img/', rawMediaPath)}
  />
)}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
