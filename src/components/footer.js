import React from "react"

import { StyledFooter } from "../styles/styled-components"

const Footer = ({ title, author }) => (
  <StyledFooter>
    <p>Copyright &copy; All Rights Reserved {new Date().getFullYear()} {title}
    </p >
    <small>Created by {author}</small>
  </StyledFooter>
)

export default Footer