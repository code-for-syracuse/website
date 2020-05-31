import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Intro from '../components/intro'

import Footer from '../components/footer';

const IndexPage = () => (
  <div>
    <Intro />
    <Layout>
      <SEO title="Home" />
      <Footer />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </div>
)

export default IndexPage
