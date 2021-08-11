import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { navigate } from "gatsby-link"

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  })

  const encode = (data) => {
    const { name, email, message } = data
    return `form-name=contact&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: encode(formState)
    })
    setFormState({
      name: "",
      email: "",
      message: ""
    })
    navigate('/')
  }

  return (
    <Layout>
      <Head page="Contact" />
      <h1>Contact</h1>
      <section>
        <form
          name="contact"
          data-netlify="true"
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "10px", }}>
          <input type="hidden" name="form-name" value="contact" />
          <label style={{ margin: "10px" }}>
            Name:
            <input
              style={{ marginLeft: "10px", }}
              type="text"
              name="name"
              placeholder="Johnny Appleseed"
              onChange={handleChange}
              value={formState.name}
            />
          </label>
          <label style={{ margin: "10px", }}>
            Email:
            <input
              style={{ marginLeft: "10px", }}
              type="email"
              name="email"
              placeholder="johnny@apple.com"
              onChange={handleChange}
              value={formState.email}
            />
          </label>
          <label style={{ margin: "10px" }}>
            Message:
            <textarea
              style={{ marginLeft: "10px", }}
              name="message"
              rows="6"
              cols="25"
              placeholder="Hey what's up?"
              onChange={handleChange}
              value={formState.message}
            ></textarea>
          </label>
          <input style={{
            width: "10%", cursor: "pointer",
            backgroundColor: "#f9f4dd",
            color: "#333",
            border: "none",
            borderRadius: "3px",
            margin: "15px",
            marginRight: "15px",
            padding: "5px 20px",
          }} type="submit" value="Contact Me" />
        </form>
      </section>
    </Layout>
  )
}

export default Contact