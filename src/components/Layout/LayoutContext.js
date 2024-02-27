import { createContext } from "react"

const LayoutContext = createContext({
  themeMode: null,
  setThemeMode: () => {},

  sidebarOpen: true,
  setSidebarOpen: () => {}
})

export default LayoutContext
