import React from "react"

// I decided to keep this seperate from CodeBlock.js, which which taken from examples give by how to use prisimjs in MDX around the interent
// This is just a wrapper for code blocks, displays the filename or language, plus whatever else might be necessary in the future

// a results block might be good too

const CodeWrapper = ({ children, title, isFile, addExtraMarginUnderTitle }) => {
  return (
    <div className="mt-lg mb-2xl mr-2">
      <h6
        className={`font-large text-lg position-relative left-1px ${
          addExtraMarginUnderTitle ? "mb-md" : "mb-xs"
        }`}
      >
        {isFile ? "File: " : ""}
        {title}
      </h6>
      <div className="mr-md">{children}</div>
    </div>
  )
}

export default CodeWrapper
