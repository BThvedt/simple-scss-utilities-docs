import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import NavBar from "./NavBar"
import Footer from "./Footer"

import { H2, H3, UL, LI } from "../Mdx/textComponents"

const Layout = ({ onSideBarPage, children }) => {
  return (
    <div
      id="wrapper"
      className="bg-site-background overflow-x-hidden min-h-screen text-default display-flex flex-col"
    >
      <NavBar />
      <div id="site-content" className="grow-1 display-flex flex-col">
        <MDXProvider
          components={{
            h2: H2,
            h3: H3,
            ul: UL,
            li: LI
          }}
        >
          {children}
        </MDXProvider>
      </div>
      {!onSideBarPage && <Footer />}
    </div>
  )
}

export default Layout
