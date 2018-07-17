import React from 'react'
import PropTypes from 'prop-types'

import BlockText from "../components/blockText"
import BlockTextImage from "../components/blockTextImage"
import BlockTextBoard from "../components/blockTextBoard"

export const MissionPageTemplate = ({
  title,
  image,
  heading,
  intro,
  block1,
  block2,
  block3,
  board
}) => {

  return (
    <mission-page>

      <section className="hero is-medium is-primary background-image"
               style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h1 className="title">
                  {heading}
                </h1>
              </div>
            </div>

          </div>
        </div>
      </section>

      <BlockText content={intro} />

      <BlockTextImage content={block1} dir={"is-right"} style={"black"} />

      <BlockTextImage content={block2} dir={"is-left"} style={"white"} />

      <BlockTextBoard content={board} style={"primary"}/>

      <BlockTextImage content={block3} cont={block1} dir={"is-right"} style={"white-ter"} />

    </mission-page>
  )
}

MissionPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  heading: PropTypes.string,
  intro: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
  block1: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  }),
  block2: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  }),
  block3: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  }),
  board: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  })
}

const MissionPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <MissionPageTemplate
      title={frontmatter.title}
      image={frontmatter.image}
      heading={frontmatter.heading}
      intro={frontmatter.intro}
      block1={frontmatter.block1}
      block2={frontmatter.block2}
      block3={frontmatter.block3}
      board={frontmatter.board}
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
        intro {
          heading
          description
        }
        block1 {
          heading
          description
          image
        }
        block2 {
          heading
          description
          image
        }
        block3 {
          heading
          description
          image
        }
        board {
          heading
          description
        }
      }
    }
  }
`
