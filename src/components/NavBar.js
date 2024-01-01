import * as React from "react"
import { Link } from "gatsby"
// HEADER IS A ReserveD WORD

const NavBar = () => {
  return (
    <div>
      <Link to="/">Simple Scss Utilities</Link>
      <Link to="/install">Install</Link>
      <Link to="/">Docs</Link>
      <Link to="/faq">FAQ</Link>
    </div>
  )
}

export default NavBar
