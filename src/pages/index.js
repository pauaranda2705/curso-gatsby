import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/layout"
import "../styles/index.scss"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hola,</h1>
      <h2>Mi nombre es Pau, soy un programador novato que vive en Terrassa.</h2>
      <p>Quieres conocerme? <Link to='/contact'>Contacta conmigo.</Link></p>
    </Layout>
  )
  }
export default IndexPage