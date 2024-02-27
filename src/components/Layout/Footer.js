import * as React from "react"

const Footer = () => {
  return (
    <footer id="#footer" className="p-lg grow-0 shrink-0">
      <p className="line-height-lg letter-spacing-md mb-md">
        © {new Date().getFullYear()} Simple Scss Utilities
      </p>
    </footer>
  )
}

export default Footer
