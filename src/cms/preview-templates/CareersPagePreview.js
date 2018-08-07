import React from 'react'
import PropTypes from 'prop-types'
import { CareersPageTemplate } from '../../templates/careers-page'

const CareersPagePreview = ({ entry }) => {

  const entryPositions = entry.getIn(["data", "positions"]);
  const positions = entryFaq ? entryPositions.toJS() : [];

  return (
  <CareersPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'heroImage'])}
    heading={entry.getIn(['data', 'heading'])}
    positions={positions}
    board={{
      heading: entry.getIn(['data', 'board', 'heading']),
      description: entry.getIn(['data', 'board', 'description']),
    }}
  />
)}

CareersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CareersPagePreview
