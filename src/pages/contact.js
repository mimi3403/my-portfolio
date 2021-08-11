import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head page="Contact" />
      <h1>Contact</h1>
      <form name="contact" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name
          <input type="text" name="name" placeholder="Johnny Appleseed" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="johnny@apple.com" />
        </label>
        <label>
          Message
          <textarea name="message" placeholder="Hey What's up?">

          </textarea>
        </label>
        <input type="submit" value="Contact Me" />
      </form>
    </Layout>
  )
}

export default Contact