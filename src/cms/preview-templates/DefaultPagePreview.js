import React from 'react'
import PropTypes from 'prop-types'
import { DefaultPageTemplate } from '../../templates/default'

const DefaultPagePreview = ({ entry, fields, widgetFor }) => {

  const rawMediaPath = fields.getIn([4, 'rawMediaPath']);

  return (
  <DefaultPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    image={entry.getIn(['data', 'heroImage']).replace('../../img/', rawMediaPath)}
  />
)}

DefaultPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DefaultPagePreview
