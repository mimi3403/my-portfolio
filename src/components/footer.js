import React from "react"

import { StyledFooter } from "../styles/styled-components"

const Footer = ({ title, author }) => (
  <StyledFooter>
    <p>Copyright &copy; All Rights Reserved {new Date().getFullYear()} {title}
      <br /> <small>Created by {author}</small>
    </p >
  </StyledFooter>
)

export default Footer