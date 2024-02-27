import React, { useState, useEffect, useContext } from "react"
import LayoutContext from "./LayoutContext"
import InnerLayout from "./InnerLayout"

const Layout = ({ children, onSideBarPage }) => {
  const [themeMode, setThemeMode] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(null)

  return (
    <LayoutContext.Provider
      value={{
        themeMode,
        setThemeMode,
        sidebarOpen,
        setSidebarOpen
      }}
    >
      <InnerLayout onSideBarPage={onSideBarPage}>{children}</InnerLayout>
    </LayoutContext.Provider>
  )
}

export default Layout
