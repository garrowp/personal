import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import About from "../components/about"
import Experience from "../components/experience"
import Contact from "../components/contact"


const IndexPage = () => (
  <Layout>
    <Banner />
    <About />
    <Experience />
    <Contact />
    <SEO title="Home" />
   </Layout>
)

export default IndexPage
