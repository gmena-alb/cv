import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Experience from "../components/Experience"
import Studies from "../components/Studies"
import Skills from "../components/Skills"
import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <Experience />
    <Studies />
    <Skills />
    <About />
  </Layout>
)

export default IndexPage
