import React, { useState, useEffect, useContext } from "react"
import { MDXProvider } from "@mdx-js/react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import LayoutContext from "./LayoutContext"
// import LayoutContextProvider from "./Layout"

import {
  H1,
  H2,
  H3,
  H4,
  P,
  UL,
  LI,
  A,
  Table,
  Code
} from "../Mdx/textComponents"
import CodeBlock from "../Mdx/CodeBlock"

const InnerLayout = ({ onSideBarPage, children }) => {
  const { themeMode, setThemeMode } = useContext(LayoutContext)

  useEffect(() => {
    const mode = localStorage.getItem("themeMode")

    if (mode === "dark-mode") {
      setThemeMode("dark-mode")
    } else if (!mode) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        // dark mode
        // console.log("PREFERS DARK MODE")
        setThemeMode("dark-mode")
      }

      console.log("no media query")
    } else {
      setThemeMode("day")
    }
  }, [])

  useEffect(() => {
    if (themeMode) {
      localStorage.setItem("themeMode", themeMode)
    }
  }, [themeMode])

  return (
    <div
      id="wrapper"
      className={` overflow-x-hidden min-h-screen display-flex flex-col ${
        themeMode == "dark-mode" ? "dark-mode" : ""
      }`}
    >
      <div
        id="inner-wrapper"
        className="display-flex flex-col grow-1 text-default bg-background"
      >
        <NavBar onSideBarPage={onSideBarPage} />
        <div id="site-content" className="grow-1 display-flex flex-col">
          <MDXProvider
            components={{
              h1: H1,
              h2: H2,
              h3: H3,
              h4: H4,
              ul: UL,
              li: LI,
              p: P,
              pre: CodeBlock,
              table: Table,
              a: A,
              code: Code
            }}
          >
            {children}
          </MDXProvider>
        </div>
        {!onSideBarPage && <Footer />}
      </div>
    </div>
  )
}

export default InnerLayout
