const path = require('path')

require("dotenv").config({
    path: `.env.${process.env.development}`,
  })

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/template/blog.js')
    const res = await graphql(`
    query {
        allContentfulCursoDeGatsbyJs{
          edges {
              node {
                    slug
            }
          }
        }
      }
    `)

    res.data.allContentfulCursoDeGatsbyJs.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}
