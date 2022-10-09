import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from "../components/head"

export const query = graphql`
query ($slug: String!) {
  contentfulCursoDeGatsbyJs(slug: {eq: $slug}){
    titulo
    fechadePublicacion(formatString: "MMM Do, YYY")
    body{
      json
    }
  }
}
`


const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = ''
        const url = ''
        return <img alt={alt} src={url}/>
      }
    }
  }

    return (
        <Layout>
          <Head title={props.data.contentfulCursoDeGatsbyJs.title}/>
            <h1>{props.data.contentfulCursoDeGatsbyJs.titulo}</h1>
            <p>{props.data.contentfulCursoDeGatsbyJs.fechadePublicacion}</p>
          {documentToReactComponents(props.data.contentfulCursoDeGatsbyJs.body.json, options)}
        </Layout>
    )
}

export default Blog