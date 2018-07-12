import React from 'react'
import PropTypes from 'prop-types'

import BlockText from "../components/blockText"
import BlockTextImage from "../components/blockTextImage"
import BlockTextBoard from "../components/blockTextBoard"

export const MissionPageTemplate = ({
  title,
  image,
  heading
}) => {

  return (
    <div>

      <section className="hero is-large is-primary background-image"
               style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <h1 className="title">
                  {heading}
                </h1>
              </div>
            </div>

          </div>
        </div>
      </section>

      <BlockText />

      <BlockTextImage dir={"is-right"} style={"black"} />

      <BlockTextImage dir={"is-left"} style={"white"} />

      <BlockTextBoard style={"primary"}/>

      <BlockTextImage dir={"is-right"} style={"white-ter"} />

    </div>
  )
}

MissionPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const MissionPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <MissionPageTemplate
      title={post.frontmatter.title}
      image={frontmatter.image}
      heading={frontmatter.heading}
    />
  )
}

MissionPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MissionPage

export const missionPageQuery = graphql`
  query MissionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
      }
    }
  }
`
