import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import AboutInfo from "../components/aboutInfo"
import ProjectInfo from "../components/projectInfo"

const About = (props) => (
  <Layout>
    <Head page="About" />
    <AboutInfo />
    <ProjectInfo />
  </Layout>
)


export default About