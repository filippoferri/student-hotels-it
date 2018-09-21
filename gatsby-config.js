module.exports = {
  siteMetadata: {
    title: 'Student Hotels',
    author: 'Filippo Ferri - filippoferri.it',
    description: 'Student Hotels - Il motore di ricerca per strutture alberghiere con tutti i comfort per studenti',
    siteUrl: 'https://studenthotels.it',
    instagramAPI: {
      userId: '8081412028',
      clientId: 'bb37bade18f94c70a7262cbc3ac1b1df',
      accessToken: '8081412028.1677ed0.67ec7515ba554315bbb619f0a7af1c07'
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://studenthotels.it',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ["/tags/*", "/tags/", "/camere/", "/note-legali/*", "/newsletter/*"],
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://studenthotels.us19.list-manage.com/subscribe/post?u=b5b23e68248d9091febf84e88&amp;id=41f831b06f',
      },
    },
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
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-responsive-iframe',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: '#2EB3C3',
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: "GTM-NWDT37S",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
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
