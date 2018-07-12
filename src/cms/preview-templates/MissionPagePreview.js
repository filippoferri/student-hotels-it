import React from 'react'
import PropTypes from 'prop-types'
import { MissionPageTemplate } from '../../templates/mission-page'

const MissionPagePreview = ({ entry, widgetFor }) => (
  <MissionPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    heading={entry.getIn(['data', 'heading'])}
    content={widgetFor('body')}
  />
)

MissionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MissionPagePreview
