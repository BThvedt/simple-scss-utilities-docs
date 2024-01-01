// Step 1: Import React
import * as React from "react"
import Layout from "../components/Layout"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </main>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Simple Scss Utilities</title>
    <meta name="description" content="The docs for Simple Scss Utilities" />
  </>
)

// Step 3: Export your component
export default IndexPage
