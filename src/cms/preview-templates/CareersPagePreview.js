import React from 'react'
import PropTypes from 'prop-types'
import { CareersPageTemplate } from '../../templates/careers-page'
import { BlogPostTemplate } from "../../templates/blog-post";

const CareersPagePreview = ({ entry, fields }) => {

  const rawMediaPath = fields.getIn([4, 'rawMediaPath']);

  return (
  <CareersPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'heroImage']).replace('../../img/', rawMediaPath)}
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
