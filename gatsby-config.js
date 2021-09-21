module.exports = {
  siteMetadata: {
    title: `Peter Garrow`,
    description: `Peter Garrow - Personal Site`,
    author: `Peter Garrow`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/PeterGarrow`,
      },
      {
        name: `github`,
        url: `https://github.com/garrowp`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Peter Garrow`,
        short_name: `Peter Garrow`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/arrow-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-150656897-1",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`UA-150656897-1`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-theme-mdx-deck`,
      options: {
        mdx: true,
        contentPath: "decks",
        basePath: "/slides",
      },
    },
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        modules: ["@mdx-deck/themes", "@kyper", "@mx-cartographer"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
