import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SidebarLayout from "../components/Layout/SidebarLayout"

const DocumentPage = ({ location, data: { mdx }, children }) => {
  const { pathname } = location

  // I don't know how to exclude the root level pages from the other routing pages
  // I guess I could create all the pages manually..
  // but .. this is easer. However, there's now way to exlude root level pages here
  // not giving them a type or a slug results in a page being generated like /null/null
  // so to fix..
  // If it's a "root level" page, give it a type of page in the frontmatter
  // and just return the children straight up in to prevent layout rendering errors
  // another option could be a clientside redirect e.g. "window.location" but this is cleaner
  // cI tried reateRedirect in gatsby-node, but at least for pages that gastby thinks exists it doesn't seem to work
  // or that's my best guess. Long story short that didn't work haha
  // this works good enough though

  // console.log("on document page")
  // console.log(mdx)
  // console.log(children)

  if (pathname.includes("/page/")) {
    return <>{children}</>
  }

  // for the other pages, they get the sidebar layout
  // the sidebarlayout should have the path info, or something, too to display the right lineks
  return (
    <Layout onSideBarPage>
      <SidebarLayout pathname={pathname}>
        <main>{children}</main>
      </SidebarLayout>
    </Layout>
  )
}

export default DocumentPage

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        description
        title
        type
        image
      }
    }
  }
`
