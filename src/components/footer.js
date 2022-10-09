import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

import *as footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata{
          author
        }
      }
    }`)

    return (
        <footer className={footerStyles.footer}>
            <p>Creado por {data.site.siteMetadata.author}, © 2022</p>
        </footer>
    )
}

export default Footer 