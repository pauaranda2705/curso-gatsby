import React from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'

import Layout from "../components/layout"
import *as blogStyles from './blog.module.scss'
import Head from "../components/head"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulCursoDeGatsbyJs ( 
        sort: { 
        fields: fechadePublicacion, 
        order: DESC 
      } 
      ) {
        edges {
          node{
            titulo
            slug
            fechadePublicacion(formatString: "MMM Do, YYY")
          }
        }
      }
    }`)

    return(
        <Layout>
          <Head title="Blog"/>
            <h1>Blog</h1>
            <ol className= {blogStyles.posts}>
                {data.allContentfulCursoDeGatsbyJs.edges.map((edge) => {
                  return (
                    <li className={blogStyles.post}>
                      <Link to={`/blog/${edge.node.slug}`}>
                        <h2>{edge.node.titulo}</h2>
                        <p>{edge.node.fechadePublicacion}</p>  
                      </Link>  
                    </li>
                  )  
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage