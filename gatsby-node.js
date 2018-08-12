const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              destinations
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pages = result.data.allMarkdownRemark.edges

    // Pages except posts
    pages
      .filter((edge)  => edge.node.frontmatter.templateKey !== 'blog-post')
      .forEach((edge) => {

        const id = edge.node.id

        createPage({
          path: edge.node.fields.slug,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
          },
      })
    })

    // TAGS
    const posts = pages.filter((edge)  => edge.node.frontmatter.templateKey === 'blog-post')

    posts
      .forEach((edge, index) => {

      const id = edge.node.id

      const prev = index === 0 ? "" : posts[index - 1].node.id
      const next = index === posts.length - 1 ? "" : posts[index + 1].node.id

      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          prev,
          next,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })

    // DESTINATIONS
    const hotels = pages.filter((edge)  => edge.node.frontmatter.templateKey === 'hotel-page')

    let destinations = []
    // Iterate through each hotel, putting all found destinations into `destinations`
    hotels.forEach(edge => {
      if (_.get(edge, `node.frontmatter.destinations`)) {
        destinations = destinations.concat(edge.node.frontmatter.destinations)
      }
    })
    destinations = _.uniq(destinations)

    // Make destination pages
    destinations.forEach(destination => {
      const destinationPath = `/camere/${_.kebabCase(destination)}/`

      createPage({
        path: destinationPath,
        component: path.resolve(`src/templates/destinations.js`),
        context: {
          destination,
        },
      })
    })

  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
