module.exports = {
  siteMetadata: {
    title: `Jenne Cattoor `,
    siteUrl: `https://www.jennecattoor.com`,
    description: `The portfolio of Jenne Cattoor, a multidisciplinary designer and front-end developer based in Belgium. Creating digital experiences and visual identities.`,
    author: `Jenne Cattoor`,
    keywords: `jenne cattoor, portfolio, designer, developer, freelance, ui, ux, front-end developer, digital experiences, visual identities`,
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};