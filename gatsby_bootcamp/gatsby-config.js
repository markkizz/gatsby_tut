module.exports = {
  siteMetadata: {
    title: "Mark with Gatsby",
    author: "Markkizz",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "src", path: `${__dirname}/src` },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#da3043",
          "font-family": "Arial",
          "layout-body-background": "#66ff79",
        },
      },
    },
  ],
}
