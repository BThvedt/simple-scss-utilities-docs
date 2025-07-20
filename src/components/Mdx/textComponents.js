import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import uuid from "react-uuid"

function getAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-")
}

// I'll use H1's exclusively for Titles for docs Pages
export const H1 = ({ children }) => {
  return (
    <header className="mx-auto mt-md">
      <div className="display-flex flex-col items-center position-relative h-3xl">
        <h3 className="font-header text-2xl display-inline bg-background z-2 position-relative px-xl">
          Simple Scss Utilities
        </h3>
        <hr className="border-solid border-md border-default position-relative bottom-1/2 w-17/20" />
      </div>

      <h1 className="font-header text-3xl align-center">{children}</h1>
    </header>
  )
}

// evtually, in the MDX, convert all h2's into anchor links
// thanks to: https://tomekdev.com/posts/anchors-for-headings-in-mdx#override-heading-component for this suggestion
export const H2 = ({ children }) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`
  return (
    <h2 className="mb-lg mt-xl font-large text-2xl" id={anchor}>
      <a href={link} className="anchor-link mr-md text-blue">
        <FontAwesomeIcon icon={faLink} />
      </a>
      {children}
    </h2>
  )
}

// the rest are just for consistant styles. I suppose I could also use a stylesheet for these
// but I wanna keep my styles in utility classes as much as I can
export const H3 = ({ children }) => {
  return <h3 className="mb-md mt-xl font-large text-xl">{children}</h3>
}

export const H4 = ({ children }) => {
  return <h3 className="font-large align-center text-xl mb-xl">{children}</h3>
}

export const P = ({ children }) => {
  return (
    <p className="mb-lg text-lg line-height-lg letter-spacing-sm">{children}</p>
  )
}

export const UL = ({ children }) => {
  return <ul className="text-lg list-disc pl-2xl py-sm">{children}</ul>
}

export const LI = ({ children }) => {
  return <li className="mb-md">{children}</li>
}

export const A = ({ children, href }) => {
  // console.log(`Props are `)
  // console.log(props)

  return (
    <Link
      to={href}
      className="font-large font-bold text-blue hover:text-magenta cursor-pointer letter-spacing-md"
    >
      {children}
    </Link>
  )
}

// inline code
export const Code = ({ children }) => {
  return (
    <code className="bg-background-dk bg-dark-mode-only px-xs mx-xs text-base">
      {children}
    </code>
  )
}

// I guess I'll have to use regular tables for other types of tables
// but since I expect to use className : css rule tables a lot
export const Table = ({ children }) => {
  let [myWindow, setMyWIndow] = useState(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMyWIndow(window)
    }
  }, [])

  let thead = {}

  thead.className =
    children[0]?.props?.children?.props?.children[0]?.props?.children
  thead.property =
    children[0]?.props?.children?.props?.children[1]?.props?.children
  thead.thirdProperty =
    children[0]?.props?.children?.props?.children[2]?.props?.children

  let tbody = []

  children[1]?.props?.children.forEach((tr) => {
    let row = {}

    row.className = tr?.props?.children[0]?.props?.children

    // ok  so if there's multiple lines
    let cssVals = tr?.props?.children[1]?.props?.children

    // sometiems want to include an exampel along with the css vals
    let thirdCell = tr?.props?.children[2]?.props?.children

    // ok so cells with multiiple values
    // the breaks are objects.. the strings are what we are interestd in
    let validCss = true
    let cssArray = []

    if (typeof cssVals == "string") {
      // trim and put in spans
      let splitString = cssVals.split(":")

      if (splitString.length > 1) {
        let leftHalf = splitString[0].trim(),
          rightHalf = splitString[1].trim().replace(";", "")

        let isSupported = myWindow?.CSS.supports(leftHalf, rightHalf)

        if (isSupported) {
          row.cssVals = (
            <span key={uuid()} className="display-block">
              <span key={uuid()} className="text-red-lt">
                {leftHalf}
              </span>
              :&nbsp;
              <span key={uuid()} className="text-blue-lt">
                {rightHalf};
              </span>
            </span>
          )
        } else {
          validCss = false
        }
      } else {
        validCss = false
      }
    } else if (typeof cssVals == "object") {
      // we actually have an array
      let finalStyledJsx = []
      cssVals.forEach((entry) => {
        if (typeof entry == "string") {
          let splitString = entry.split(":")

          if (splitString.length > 1) {
            let leftHalf = splitString[0].trim(),
              rightHalf = splitString[1].trim().replace(";", "")

            let isSupported = myWindow?.CSS.supports(leftHalf, rightHalf)

            if (isSupported) {
              finalStyledJsx.push([leftHalf, rightHalf])
            } else {
              finalStyledJsx.push(tr?.props?.children[1]?.props?.children)
            }
          } else {
            finalStyledJsx.push(tr?.props?.children[1]?.props?.children)
          }
        }
      })

      row.cssVals = (
        <>
          {finalStyledJsx.map((entry) => {
            if (typeof entry == "string") {
              return entry
            } else {
              return (
                <span key={uuid()} className="display-block">
                  <span key={uuid()} className="text-red-lt">
                    {entry[0]}
                  </span>
                  :&nbsp;
                  <span key={uuid()} className="text-blue-lt">
                    {entry[1]};
                  </span>
                </span>
              )
            }
          })}
        </>
      )
    } else {
      validCss = false
    }

    if (!validCss) {
      row.cssVals = tr?.props?.children[1]?.props?.children
    }

    if (thirdCell) {
      console.log(thirdCell)
      row.thirdCell = thirdCell
    }

    tbody.push(row)
  })

  return (
    <table className="w-3/4 mx-auto max-scr:w-full max-scr:mx-0 mt-2xl mb-2xl">
      <thead className="display-block letter-spacing-xl">
        <tr key="head-row-1" className="display-flex">
          <th
            className={`display-flex ${
              thead.thirdProperty ? "w-1/3" : "w-1/2"
            } font-large text-lg`}
          >
            {thead.className}
          </th>
          <th
            className={`display-flex ${
              thead.thirdProperty ? "w-1/3 justify-center" : "w-1/2"
            } font-large text-lg  `}
          >
            {thead.property}
          </th>
          {thead.thirdProperty && (
            <th className="display-flex justify-center font-large text-lg  w-1/3">
              {thead.thirdProperty}
            </th>
          )}
        </tr>
      </thead>
      <tbody className="display-block max-h-30 overflow-y-auto overflow-x-hidden pr-lg">
        {tbody.map((row, i) => {
          return (
            <tr
              className={`display-flex w-full p-sm border-dotted  "border-green-ltr" ${
                i < tbody.length - 1 ? "bb-sm" : ""
              } min-h-3`}
              key={uuid()}
            >
              <td
                className={`display-flex flex-col ${
                  row.thirdCell ? "w-1/3" : "w-1/2"
                } justify-center text-magenta-lt`}
              >
                .{row.className}
              </td>
              <td
                className={`display-flex flex-col ${
                  row.thirdCell ? "w-1/3 items-center" : "w-1/2"
                } justify-center text-magenta-lt`}
              >
                {row.cssVals}
              </td>
              {row.thirdCell && (
                <td
                  className={`display-flex flex-col w-1/3 justify-center items-center cemter`}
                >
                  {row.thirdCell}
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const Paragraph = ({ className, text }) => {
  return <p className={className}>{text}</p>
}
