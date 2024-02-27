import { Highlight, Prism } from "prism-react-renderer"
;(typeof global !== "undefined" ? global : window).Prism = Prism
// await import("prismjs/components/prism-javascript")

// import Prism from "prism-react-renderer/prism"
// ;(typeof global !== "undefined" ? global : window).Prism = Prism // gotta do this one otherwise it'll say Prism is not defined
await import("prismjs/components/prism-scss")
// await import("prismjs/components/prism-r")
