import React from "react";
import PropTypes from "prop-types";

import Hero from "../components/Hero";
import BlockText from "../components/BlockText";
import BlockTextImage from "../components/BlockTextImage";
import BlockTextBoard from "../components/BlockTextBoard";
import Newsletter from "../components/Newsletter";
import AnteFooter from "../components/AnteFooter";

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

  console.log(image);

  return (
    <main>

      <Hero image={image.childImageSharp.sizes} heading={heading}/>

      <BlockText content={intro}/>

      <BlockTextImage content={block1} dir={"is-right"} style={"black"}/>

      <BlockTextImage content={block2} dir={"is-left"} style={"white"}/>

      <BlockTextBoard content={board} style={"primary"}/>

      <BlockTextImage content={block3} dir={"is-right"} style={"white-ter"}/>

      <Newsletter/>

      <AnteFooter/>

    </main>
  );
};

MissionPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string,
  intro: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  }),
  block1: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  }),
  block2: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  }),
  block3: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  }),
  board: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  })
};

const MissionPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <MissionPageTemplate
      title={frontmatter.title}
      image={frontmatter.heroImage}
      heading={frontmatter.heading}
      intro={frontmatter.intro}
      block1={frontmatter.block1}
      block2={frontmatter.block2}
      block3={frontmatter.block3}
      board={frontmatter.board}
    />
  );
};

MissionPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default MissionPage;

export const missionPageQuery = graphql`
  query MissionPage($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      frontmatter {
        title
        heroImage {
          childImageSharp{
            sizes(maxWidth: 1280) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        heading
        intro {
          heading
          description
        }
        block1 {
          heading
          description
          image {
            childImageSharp{
              sizes(maxWidth: 1280) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
        block2 {
          heading
          description
          image {
            childImageSharp{
              sizes(maxWidth: 1280) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
        block3 {
          heading
          description
          image {
            childImageSharp{
              sizes(maxWidth: 1280) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
        board {
          heading
          description
        }
      }
    }
  }
`;
