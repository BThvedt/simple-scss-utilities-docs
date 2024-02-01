import { createContext } from "react"

const SidebarContext = createContext({
  hasScrolled: false,
  setHasScrolled: () => {}, // keep track if the scrolling was done by the user

  activeAnchor: "", // '${path} ${to} of active anchor link'
  setActiveAnchor: () => {}
})

export default SidebarContext
