import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

function getAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-")
}

// evtually, in the MDX, convert all h2's into anchor links
// thanks to: https://tomekdev.com/posts/anchors-for-headings-in-mdx#override-heading-component for this suggestion
export const H2 = ({ children }) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`
  return (
    <h2 className="text-blue" id={anchor}>
      <a href={link} className="anchor-link">
        <FontAwesomeIcon icon={faLink} />
      </a>
      {children}
    </h2>
  )
}

// the rest are just for consistant styles. I suppose I could also use a stylesheet for these
// but I wanna keep my styles in utility classes as much as I can
export const H3 = ({ children }) => {
  return <h3 className="text-green">{children}</h3>
}

export const UL = ({ children }) => {
  return <ul className="font-bold">{children}</ul>
}

export const LI = ({ children }) => {
  return <ul className="text-orange">{children}</ul>
}
