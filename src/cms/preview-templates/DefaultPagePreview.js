import React from 'react'
import PropTypes from 'prop-types'
import { DefaultPageTemplate } from '../../templates/default'

const DefaultPagePreview = ({ entry, widgetFor }) => (
  <DefaultPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    image={entry.getIn(['data', 'heroImage'])}
  />
)

DefaultPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DefaultPagePreview
