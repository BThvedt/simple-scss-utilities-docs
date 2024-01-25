import * as React from "react"
import { Link } from "gatsby"
// HEADER IS A ReserveD WORD

const NavBar = () => {
  return (
    <div id="navBar" className="p-lg bb-solid bb-sm">
      <nav className="d-flex justify-between max-w-container m-auto">
        <div>
          <Link to="/">SSU</Link>
        </div>

        <div className="d-flex justify-between w-2/5 pr-xl">
          <Link to="/philosophy">Philosophy</Link>
          <Link to="/install">Install</Link>
          <Link to="/install">Customize</Link>
          <Link to="/classes">Docs</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
