module.exports = {
  siteMetadata: {
    title: `Peter Garrow | Web Developer`,
    description: `My personal site!`,
    author: `Peter Garrow`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/PeterGarrow`
      },
      {
        name: `github`,
        url: `https://github.com/garrowp`
      }

    ]
  },
  plugins: [
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Peter Garrow | Web Developer`,
        short_name: `Peter Garrow`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/arrow-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
