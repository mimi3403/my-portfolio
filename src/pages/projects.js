import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import ProjectDetails from "../components/projectDetails"


const Projects = () => {
  return (
    <Layout>
      <Head page="Projects" />
      <ProjectDetails />
    </Layout>
  )
}

export default Projects