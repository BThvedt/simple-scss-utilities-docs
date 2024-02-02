import * as React from "react"
import { Link } from "gatsby"
// HEADER IS A ReserveD WORD

const NavBar = () => {
  return (
    <div
      id="navBar"
      className="p-lg bb-solid bb-sm grow-0 shrink-0 h-4xl sizing-border"
    >
      <nav className="display-flex justify-content-between max-w-container m-auto">
        <div>
          <Link to="/">SSU</Link>
        </div>

        <div className="display-flex justify-content-between w-2/5 pr-xl">
          <Link to="/philosophy">Philosophy</Link>
          <Link to="/install">Install</Link>
          <Link to="/docs">Docs</Link>
          <Link to="/customize">Customize</Link>
          <Link to="/components">Components</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
