module.exports = {
  siteMetadata: {
    title: 'Student Hotels',
    author: 'Filippo Ferri - filippoferri.it',
    description: 'Student Hotels - Il motore di ricerca per strutture alberghiere con tutti i comfort per studenti',
    siteUrl: 'https://www.studenthotels.it',
    instagramAPI: {
      userId: '8081412028',
      clientId: 'bb37bade18f94c70a7262cbc3ac1b1df',
      accessToken: '8081412028.1677ed0.67ec7515ba554315bbb619f0a7af1c07'
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    "gatsby-remark-copy-linked-files",
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1280,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `black`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
