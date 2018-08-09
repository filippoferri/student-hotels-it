import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'
import { AboutPageTemplate } from "../../templates/default";

const BlogPostPreview = ({ entry, fields,  widgetFor }) => {
  const rawMediaPath = fields.getIn([4, 'rawMediaPath']);
  return (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'heroImage']).replace('../../img/', rawMediaPath)}
  />
)}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
