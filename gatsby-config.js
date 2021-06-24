module.exports = {
  siteMetadata: {
    title: `Philip Renkert`,
    description: `Maker of Things`,
    author: "Philip Renkert",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `react-scroll-horizontal`,
    `react-player`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }, 

    {
      resolve: `gatsby-source-filesystem`, // Required for Netlify CMS + Remark
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    'gatsby-image',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`, // gatsby-plugin-manifest is for people to make this an icon on a mobile devices
      options: {
        name: `Philip Renkert Portfolio`,
        short_name: `Philip Renkert`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
