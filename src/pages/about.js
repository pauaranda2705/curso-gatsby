import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
    return (
            <Layout>
                <Head title="About"/>
                <h1>Sobre mi</h1>
                <p>Ahora mismo trabajo como programador en practicas en ITDO.</p>
                <p>Quieres conocerme? <Link to='/contact'>Contacta conmigo.</Link></p>
            </Layout>
    )
}

export default AboutPage