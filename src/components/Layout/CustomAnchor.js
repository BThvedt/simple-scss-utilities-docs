import React, { useState, useEffect, useContext } from "react"
import SidebarContext from "./SidebarContext"
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"

/*
  Gatsby seemed to have a little trouble with anchor links 
  Not only did they not seem to quite work but.. I also wanted to implement smooth scrolling
  if you jump from page to page so I made my own component. 
  It's possible to make the URLs just slightly awkared if you
  click directly on the link .. but.. they still work
*/
const CustomAnchor = ({ children, path, to }) => {
  const location = useLocation()
  const { activeAnchor, setActiveAnchor, hasScrolled, setHasScrolled } =
    useContext(SidebarContext)
  const [active, setActive] = useState(false)
  const { pathname } = location

  useEffect(() => {
    if (activeAnchor == `${process.env.PATH_PREFIX}${path} ${to}`) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [activeAnchor])

  // console.log(
  //   `path: ${path} to: ${to} pathname: ${pathname} prefix with path: ${process.env.PATH_PREFIX}${path}`
  // )

  return (
    <p
      className={`${active ? "font-bold" : ""} cursor-pointer`}
      onClick={() => {
        // the pathname from location usually has an added slash

        if (`${process.env.PATH_PREFIX}${path}/` == pathname) {
          const tag = document.getElementById(to)
          tag.scrollIntoView({ behavior: "smooth" })
          // set "hasScrolled" to false .. gets set true if the user scrolls the docs area
          setHasScrolled(false)

          // in the MDX anchor componnnt, the text generates the id "to"
          // two anchor links on different documents might have the same text so
          // I have the path be part of the identifying string
          // as long as 2 anchors on the same MDX page don't have the same text we're good
          setActiveAnchor(`${process.env.PATH_PREFIX}${path} ${to}`)
        } else {
          navigate(`${path}?anchor=${to}`)
        }
      }}
    >
      {children}
    </p>
  )
}

export default CustomAnchor
