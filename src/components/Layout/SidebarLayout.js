import React, { useState } from "react"
import Footer from "./Footer"
import SideBar from "./Sidebar"
import { useStaticQuery, graphql } from "gatsby"
import * as layoutStyles from "./layout.module.scss"
import SidebarContext from "./SidebarContext"
// not sure how best to pass the sidebar and the content

const SidebarLayout = ({ pathname, children }) => {
  // context state

  const [hasScrolled, setHasScrolled] = useState(false)
  const [activeAnchor, setActiveAnchor] = useState("")

  const pathParts = pathname.split("/")

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
      components: allMdx(
        filter: { frontmatter: { type: { eq: "components" } } }
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

  const section = pathParts.length && pathname.split("/")[1] // this should always be defined in this route but let;s be careful

  let sidebarData

  switch (section) {
    case "docs":
      sidebarData = { path: "docs", ...docs }
      break
    case "components":
      sidebarData = { path: "components", ...components }
      break
    case "customize":
      sidebarData = { path: "customize", ...customize }
      break
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
          className={`display-flex flex-col grow-1 overflow-y-scroll ${layoutStyles.docsSection}`}
          onWheel={() => {
            setHasScrolled(true)
          }}
          // remember to test this on mobile
          onTouchStart={() => {
            setHasScrolled(true)
          }}
        >
          <div id="the-document" className="grow-1 pl-xl p-lg">
            {children}
          </div>
          <Footer />
        </div>
      </SidebarContext.Provider>
    </div>
  )
}

export default SidebarLayout
