import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Hero from "../components/Hero";
import BlockText from "../components/BlockText";
import BlockTextImage from "../components/BlockTextImage";
import BlockTextBoard from "../components/BlockTextBoard";
import Newsletter from "../components/Newsletter";
import AnteFooter from "../components/AnteFooter";

export const MissionPageTemplate = ({
    helmet,
    title,
    image,
    heading,
    intro,
    block1,
    block2,
    block3,
    board,
    newsletterImage
  }) => {

  return (
    <main>

      {helmet || ""}

      <Hero image={image.childImageSharp.sizes} heading={heading}/>

      <BlockText content={intro}/>

      <BlockTextImage content={block1} dir={"is-right"} style={"black"}/>

      <BlockTextImage content={block2} dir={"is-left"} style={"white"}/>

      <BlockTextBoard content={board} style={"secondary"}/>

      <BlockTextImage content={block3} dir={"is-right"} style={"white-ter"}/>

      <Newsletter image={newsletterImage.childImageSharp.sizes}/>

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

  const { frontmatter } = data.current;
  const { newsletter: newsletter } = data;
  const image = newsletter.edges[0].node;

  return (
    <MissionPageTemplate
      helmet={<Helmet title={`${frontmatter.title} | Student Hotels`}><html lang="it" /></Helmet>}
      title={frontmatter.title}
      image={frontmatter.heroImage}
      heading={frontmatter.heading}
      intro={frontmatter.intro}
      block1={frontmatter.block1}
      block2={frontmatter.block2}
      block3={frontmatter.block3}
      board={frontmatter.board}
      newsletterImage={image.frontmatter.newsletterImage}
    />
  );
};

MissionPage.propTypes = {
  current: PropTypes.object,
  newsletter: PropTypes.object
};

export default MissionPage;

export const missionPageQuery = graphql`
  query MissionPage($id: String!) {
    current: markdownRemark(id: { eq: $id } ) {
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
    newsletter: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            newsletterImage {
              childImageSharp{
                sizes(maxWidth: 1280) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
