import React from 'react'
import PropTypes from 'prop-types'
import { HotelPageTemplate } from '../../templates/hotel-page'

const HotelTemplate = ({ entry, widgetFor }) => (
  <HotelPageTemplate
    content={widgetFor('info')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    featured={entry.getIn(['data', 'thumbnail'])}
  />
)

HotelTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HotelTemplate
