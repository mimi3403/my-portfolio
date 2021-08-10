import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import AboutInfo from "../components/aboutInfo"
import ProjectInfo from "../components/projectInfo"

const IndexPage = () => {
  return (
    <Layout>
      <Head page="Home" />
      <h3 style={{ textAlign: "center", marginTop: "30px", marginBottom: "10px", }}>MINGYU HONG | SOFTWARE ENGINEER </h3>
      <hr style={{ margin: "auto", marginBottom: "10px", width: "30%", align: "center" }} />
      {/* <h3 style={{ textAlign: "center", marginTop: 0 }}>SOFTWARE ENGINEER</h3> */}
      <AboutInfo />
      <ProjectInfo />
    </Layout>
  )
}
export default IndexPage
