module.exports = {
  siteMetadata: {
    title: "Curso de GatsbyJS",
    author: "Pau Aranda"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3l4i0fsuyt3g`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `EtfyDE7pC-yaIDObz6kaoNlbPZ0Bb_pKtFLA-tC8BR8`
      },
    },     `gatsby-plugin-image`,
    'gatsby-plugin-sass',{
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sharp`,
    {
    resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
}