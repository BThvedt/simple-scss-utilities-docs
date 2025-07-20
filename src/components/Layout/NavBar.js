import React, { useContext, useState, useEffect } from "react"
import { Link } from "gatsby"
import logo from "../../images/SSU-logo-menu.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon, faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import LayoutContext from "./LayoutContext"
import useWindowDimensions from "../../hooks/useWindowDimensions"
// HEADER IS A ReserveD WORD

const NavBar = () => {
  const { themeMode, setThemeMode } = useContext(LayoutContext)
  const [wideScreen, setWideScreen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { width } = useWindowDimensions()

  // need a bit of JS to open/close menus and stuff
  useEffect(() => {
    if (width > 768) {
      setWideScreen(true)
    } else {
      setWideScreen(false)
    }
  }, [width])

  useEffect(() => {
    if (!wideScreen) {
      setMenuOpen(false)
    }
  }, [wideScreen])

  return (
    <div
      id="navBar"
      className={`p-lg shadow-sm z-index-1 grow-0 shrink-0 h-4xl sizing-border position-relative  z-5 bg-background`}
    >
      <nav className={`display-flex justify-between max-tab:h-0 pl-xl`}>
        <div className="position-relative bottom-md pl-md">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>

        <div className="display-flex justify-between w-1/2">
          <div className="grow-1  display-flex justify-around max-tab:flex-row-reverse max-tab:justify-normal pr-lg max-tab:pr-2xl">
            <Link
              to="/motivation"
              className="display-inline max-tab:display-none font-large hover:text-magenta cursor-pointer"
            >
              Motivation
            </Link>
            <Link
              to="/install"
              className="display-inline max-tab:display-none font-large hover:text-magenta cursor-pointer"
            >
              Install
            </Link>
            <Link
              to="/docs"
              className="display-inline max-tab:display-none font-large hover:text-magenta cursor-pointer"
            >
              Docs
            </Link>
            <Link
              to="/customize"
              className="display-inline max-tab:display-none font-large hover:text-magenta cursor-pointer"
            >
              Customize
            </Link>
            <span className={`display-none max-tab:display-inline`}>
              <FontAwesomeIcon
                icon={faBars}
                className=" text-2xl cursor-pointer hover:text-blue-lt position-relative bottom-xs text-magenta"
                onClick={() => setMenuOpen(true)}
              />
            </span>
          </div>

          <div className="w-4 display-flex justify-between text-xl position-relative bottom-xs grow-0">
            <a href="https://github.com/BThvedt/simple-scss-utilities">
              <FontAwesomeIcon
                icon={faGithub}
                className="cursor-pointer hover:text-blue-lt text-magenta"
              />
            </a>
            {themeMode != "dark-mode" && (
              <FontAwesomeIcon
                className="cursor-pointer hover:text-blue-lt position-relative top-2px max-tab:top-3px text-magenta"
                onClick={() => {
                  setThemeMode("dark-mode")
                }}
                icon={faSun}
              />
            )}
            {themeMode == "dark-mode" && (
              <FontAwesomeIcon
                className="cursor-pointer hover:text-blue-lt position-relative top-2px max-tab:top-3px text-magenta"
                onClick={() => setThemeMode("day")}
                icon={faMoon}
              />
            )}
            {/* <FontAwesomeIcon icon={faBars} /> */}
          </div>
          <div
            className={`display-none w-0 ${
              menuOpen ? "max-tab:display-block" : ""
            } position-relative right-2`}
          >
            <div className="w-10  bg-background-ltr position-relative right-10 bottom-2px shadow-lg radius-md p-lg pt-xl">
              <FontAwesomeIcon
                icon={faX}
                className="position-absolute top-sm right-sm text-lg hover:text-blue-lt cursor-pointer text-magenta hover:text-blue"
                onClick={() => {
                  setMenuOpen(false)
                }}
              />
              <nav className="display-flex flex-col line-height-xl">
                <Link
                  to="/motivation"
                  className="font-large text-lg hover:text-magenta cursor-pointer mb-sm"
                >
                  Motivation
                </Link>
                <Link
                  to="/install"
                  className="font-large text-lg hover:text-magenta cursor-pointer mb-sm"
                >
                  Install
                </Link>
                <Link
                  to="/docs"
                  className="font-large text-lg hover:text-magenta cursor-pointer mb-sm"
                >
                  Docs
                </Link>
                <Link
                  to="/customize"
                  className="font-large text-lg hover:text-magenta cursor-pointer mb-xs"
                >
                  Customize
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
