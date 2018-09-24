module.exports = {
  siteMetadata: {
    title: `Bit More Media`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-72779821-1',
        cookieDomain: 'bitmoremedia.com',
      },
    },
    /*
    {
      // NOTE: for now this is implemented as a local plugin (by adding this fork https://github.com/bitmoremedia/gatsby-plugin-favicon
      // to a local plugins directory) as a pull request has been submitted (https://github.com/Creatiwity/gatsby-plugin-favicon/pull/33)
      // to add support for a 'title' config option (as otherwise the add to home screen text was just displaying the name of our app
      // package: 'www-bitmoremedia')
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `${__dirname}/src/images/favicon.png`,
        title: 'Bit More Media',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    */
  ],
}
