import React from "react"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <form data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name
          <input type="text" placeholder="Johnny Appleseed" />
        </label>
        <label>
          Email
          <input type="email" placeholder="johnny@apple.com" />
        </label>
        <label>
          Message
          <textarea placeholder="Hey What's up?">

          </textarea>
        </label>
      </form>
    </Layout>
  )
}

export default Contact