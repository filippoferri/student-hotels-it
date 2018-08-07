import React from 'react'
import PropTypes from 'prop-types'
import { MissionPageTemplate } from '../../templates/mission-page'

const MissionPagePreview = ({ entry }) => (
  <MissionPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'heroImage'])}
    heading={entry.getIn(['data', 'heading'])}
    intro={{
      heading: entry.getIn(['data', 'intro', 'heading']),
      description: entry.getIn(['data', 'intro', 'description']),
    }}
    block1={{
      heading: entry.getIn(['data', 'block1', 'heading']),
      description: entry.getIn(['data', 'block1', 'description']),
      image: entry.getIn(['data', 'block1', 'image']),
    }}
    block2={{
      heading: entry.getIn(['data', 'block2', 'heading']),
      description: entry.getIn(['data', 'block2', 'description']),
      image: entry.getIn(['data', 'block2', 'image']),
    }}
    board={{
      heading: entry.getIn(['data', 'board', 'heading']),
      description: entry.getIn(['data', 'board', 'description']),
    }}
    block3={{
      heading: entry.getIn(['data', 'block3', 'heading']),
      description: entry.getIn(['data', 'block3', 'description']),
      image: entry.getIn(['data', 'block3', 'image']),
    }}
  />
)

MissionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MissionPagePreview
