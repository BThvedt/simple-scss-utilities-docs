import React, { useState, useContext } from "react"
import Footer from "./Footer"
import SideBar from "./Sidebar"
import LayoutContext from "./LayoutContext"
import { useStaticQuery, graphql } from "gatsby"
import * as layoutStyles from "./layout.module.scss"
import SidebarContext from "./SidebarContext"
// not sure how best to pass the sidebar and the content

const SidebarLayout = ({ pathname, children }) => {
  // context state
  const { sidebarOpen, setSidebarOpen } = useContext(LayoutContext)

  const [hasScrolled, setHasScrolled] = useState(false)
  const [activeAnchor, setActiveAnchor] = useState("")

  const { docs, components, customize } = useStaticQuery(graphql`
    query HeaderQuery {
      docs: allMdx(filter: { frontmatter: { type: { eq: "docs" } } }) {
        nodes {
          id
          frontmatter {
            title
            slug
            category
            order
            isCategoryRoot
            anchorLinks {
              title
              link
            }
          }
        }
      }
      # components: allMdx(
      #   filter: { frontmatter: { type: { eq: "components" } } }
      # ) {
      #   nodes {
      #     id
      #     frontmatter {
      #       title
      #       slug
      #       category
      #       order
      #       isCategoryRoot
      #       anchorLinks {
      #         title
      #         link
      #       }
      #     }
      #   }
      # }
      customize: allMdx(
        filter: { frontmatter: { type: { eq: "customize" } } }
      ) {
        nodes {
          id
          frontmatter {
            title
            slug
            category
            order
            isCategoryRoot
            anchorLinks {
              title
              link
            }
          }
        }
      }
    }
  `)

  // const pathParts = pathname.split("/")
  // const section = pathParts.length && pathname.split("/")[1] // this should always be defined in this route but let;s be careful

  let path_prefix = process.env.PATH_PREFIX
    ? process.env.PATH_PREFIX
    : process.env.GATSBY_PATH_PREFIX // make a .env.development file and put GAtSBY

  let sidebarData

  console.log("TIME TO DEBUG")
  console.log(sidebarData)
  console.log(`${path_prefix}docs`)
  console.log(process.env)
  console.log(process.env.GATSBY_PATH_PREFIX)
  console.log(process.env.PATH_PREFIX)

  // this might be kinda janky code .. but I don't wanna spend forever trying to think about an alternative way
  if (pathname.startsWith(`${path_prefix}docs`)) {
    sidebarData = { path: "docs", ...docs }
  } else if (pathname.startsWith(`${path_prefix}customize`)) {
    sidebarData = { path: "customize", ...customize }
  }

  return (
    <div id="sidebar-layout" className="display-flex min-w-full grow-1">
      <SidebarContext.Provider
        value={{
          activeAnchor,
          setActiveAnchor,
          hasScrolled,
          setHasScrolled
        }}
      >
        <SideBar sidebarData={sidebarData} />
        <div
          id="docs-section"
          className={`display-flex flex-col grow-1 overflow-y-scroll position-relative ${layoutStyles.docsSection}`}
          onWheel={() => {
            setHasScrolled(true)
          }}
          // remember to test this on mobile
          onTouchStart={() => {
            setHasScrolled(true)
          }}
        >
          <div
            id="small-width-overlay"
            className={`display-none ${
              sidebarOpen ? "max-tab:display-block" : ""
            } position-fixed top-0 left-0 w-full h-full z-3 bg-black opacity-10`}
          />
          <div
            id="the-document"
            className={`grow-1 pl-xl p-lg w-19/20 max-w-container lg:mx-auto   ${
              sidebarOpen ? "max-tab:filter-blur-md" : ""
            }`}
          >
            {children}
          </div>
          <Footer />
        </div>
      </SidebarContext.Provider>
    </div>
  )
}

export default SidebarLayout
