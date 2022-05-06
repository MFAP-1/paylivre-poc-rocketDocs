module.exports = {
  siteMetadata: {
    siteTitle: `Paylivre POC - documentation SDK Gateway`,
    defaultTitle: `Paylivre POC - documentation SDK Gateway`,
    siteTitleShort: `Documentation SDK Gateway`,
    siteDescription: `This is a POC to test the gatsby-rocketDocs framework for documenting`,
    siteUrl: `https://paylivre-documentation-sdk.com`,
    siteAuthor: `paylivre`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#215aff`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/MFAP-1/paylivre-poc-rocketDocs`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paylivre POC - documentation SDK Gateway`,
        short_name: `Paylivre POC - documentation SDK Gateway`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
  pathPrefix: "/paylivre-poc-rocketDocs",
};
