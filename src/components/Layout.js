import * as React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div id="wrapper" className="background-site-background text-default">
      <NavBar />
      <div id="site-content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
