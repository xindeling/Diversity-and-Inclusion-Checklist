/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Diversity and Inclusion Checklist`,
    description: `A hands-on diversity and inclusion checklist for designers`,
    author: `Xindeling Pan`,
  },
  pathPrefix: "/Diversity-and-Inclusion-Checklist",
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-LQTBTLHEBH",
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
