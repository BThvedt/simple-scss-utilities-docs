import React from "react"
// import Highlight, { defaultProps } from "prism-react-renderer"
import { Highlight, themes, defaultProps } from "prism-react-renderer"

// Thanks to:
// https://dev.to/mmz001/adding-syntax-highlighting-with-line-numbers-to-gatsby-mdx-using-prism-react-renderer-1bgk#:~:text=When%20you%20add%20a%20fenced,and%20highlight%20the%20code%20block.
// https://github.com/FormidableLabs/prism-react-renderer
// https://theme-ui.com/packages/prism

export default function CodeBlock(props) {
  const className = props.children.props.className || ""
  const matches = className.match(/language-(?<lang>.*)/)
  const showLineNumbers = props.children.props.lineNumbers
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
      // theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} overflow-auto radius-sm shadow-sm`}
          style={{ ...style, padding: "1rem" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {showLineNumbers && <span className="line-number">{i + 1}</span>}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
