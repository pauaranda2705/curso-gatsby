import React from "react"

import Footer from "../components/footer"
import Header from '../components/header'
import Layout from "../components/layout"
import Head from "../components/head"


const ContactPage = () => {
    return (
            <Layout>
                <Head title="Contact"/>
                <h1>Contacto</h1>
                <p>La mejor manera para contactarme es atraves de <a href="https://github.com/Beast2705" target="_blank">Github</a>.</p>
            </Layout>
    )
}

export default ContactPage