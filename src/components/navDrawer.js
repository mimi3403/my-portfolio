import React from "react"
import { Link } from "gatsby"
import { StyledNavDrawer } from "../styles/styled-components"

function NavDrawer({ open, setOpen }) {
  return (
    <StyledNavDrawer open={open}>
      <Link to="/" onClick={() => setOpen(false)}>Home</Link>
      <Link to="/about" onClick={() => setOpen(false)}>About</Link>
    </StyledNavDrawer>
  )
}

NavDrawer.propTypes = {
  open: bool.isRequired,
}

export default NavDrawer