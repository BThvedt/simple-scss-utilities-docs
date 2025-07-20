import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import CustomAnchor from "./CustomAnchor"
import SidebarContext from "./SidebarContext"
import LayoutContext from "./LayoutContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX, faBars } from "@fortawesome/free-solid-svg-icons"
import * as layoutStyles from "./layout.module.scss"
import useWindowDimensions from "../../hooks/useWindowDimensions"
// HEADER IS A ReserveD WORD

const SideBar = ({ sidebarData }) => {
  const { setActiveAnchor, hasScrolled } = useContext(SidebarContext)
  const { sidebarOpen, setSidebarOpen } = useContext(LayoutContext)

  const [anchorsOnPage, setAnchorsOnPage] = useState([])
  const [anchorsLoaded, setAnchorsLoaded] = useState(false)
  const [anchorUpdate, setAnchorUpdate] = useState([])

  const [intialAnchorLinkSet, setIntialAnchorLinkSet] = useState(false)

  // const [sidebarOpen, setSidebarOpen] = useState(true)
  const [wideScreen, setWideScreen] = useState(false)
  const { width } = useWindowDimensions()

  const location = useLocation()
  const { pathname } = location

  // ok every time something enteres or leaves, update
  // the anchors in view
  useEffect(() => {
    const els = document.querySelectorAll(".anchor-link")

    const observerCallback = (entries, observer, header) => {
      const newAnchorInfo = []
      entries.forEach((entry, i) => {
        const to = entry.target.href.split("#")[1]
        const path = pathname.slice(0, -1)
        const anchorString = `${path} ${to}`

        if (entry.isIntersecting) {
          newAnchorInfo.push({
            anchorString,
            inView: true,
            offsetTop: entry.target.offsetTop
          })
        } else {
          newAnchorInfo.push({
            anchorString,
            inView: false,
            offsetTop: entry.target.offsetTop
          })
        }
      })

      setAnchorUpdate(newAnchorInfo)
    }

    const observer = new window.IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.5 // set offset 0.1 means trigger if atleast 10% of element in viewport
    })

    els.forEach((el) => {
      observer.observe(el)
    })
  }, [])

  useEffect(() => {
    if (anchorUpdate.length && !anchorsLoaded) {
      setAnchorsOnPage(anchorUpdate)
      setAnchorsLoaded(true)
    }
  }, [anchorUpdate, anchorsLoaded])

  // eh, there might be a better way to do this but
  // by the time I got here I was like "It works, and it's good enough!"
  useEffect(() => {
    // to prevent infinite reloading, only update if there is a non-empty update, and then set the update to empty if done
    if (anchorsLoaded && anchorUpdate.length) {
      let newAnchorsOnPage = [...anchorsOnPage]
      anchorUpdate.forEach((anchorInfo) => {
        const index = anchorsOnPage.findIndex((anchor) => {
          return anchorInfo.anchorString == anchor.anchorString
        })

        if (index >= 0) {
          newAnchorsOnPage.splice(index, 1, anchorInfo)
        }
      })

      setAnchorsOnPage(newAnchorsOnPage)
      setAnchorUpdate([])

      if (hasScrolled) {
        let smallestTopOffset = Number.POSITIVE_INFINITY
        let indexOfSmallestOffset = -1
        newAnchorsOnPage.forEach((anchor, i) => {
          if (anchor.inView && anchor.offsetTop < smallestTopOffset) {
            smallestTopOffset = anchor.offsetTop
            indexOfSmallestOffset = i
          }
        })

        if (indexOfSmallestOffset >= 0) {
          const newActiveAnchorInfo = newAnchorsOnPage[indexOfSmallestOffset]
          setActiveAnchor(newActiveAnchorInfo.anchorString)
        } else {
          // if we're here, there's no anchors vidible on screen
          setActiveAnchor("")
        }
      }
    }
  }, [anchorsOnPage, anchorUpdate, anchorsLoaded, hasScrolled])

  useEffect(() => {
    if (location.search && !intialAnchorLinkSet) {
      const urlParams = new URLSearchParams(location.search)
      const anchorLink = urlParams.get("anchor")
      if (anchorLink) {
        const tag = document.getElementById(anchorLink)
        if (tag) {
          tag.scrollIntoView({ behavior: "smooth" })

          const path = pathname.slice(0, -1)
          setActiveAnchor(`${path} ${anchorLink}`)
        }
      }
      setIntialAnchorLinkSet(true)
    } else if (anchorsLoaded && !intialAnchorLinkSet) {
      // just set the active anchor link to the highest link in view
      // pretty sure it's just gonna be the firs one that's "in view"
      // and if the first one is in view, it's gonna be that one so ..
      let firstAnchor = anchorsOnPage[0]

      if (firstAnchor.inView) {
        setActiveAnchor(firstAnchor.anchorString)
      }

      setIntialAnchorLinkSet(true)
    }
  }, [anchorsLoaded, anchorsOnPage, intialAnchorLinkSet])

  useEffect(() => {
    if (width > 768) {
      setWideScreen(true)
    } else {
      setWideScreen(false)
    }
  }, [width])

  useEffect(() => {
    setSidebarOpen(true)
  }, [wideScreen])

  // organize alphabetically
  // then loop the map and fill in the links and sublinks
  console.log("SIDEBAR DATA IS")
  console.log(sidebarData)

  if (!sidebarData) {
    return <>{`No sidebar data for path ${pathname}`}</>
  }

  const { path, nodes } = sidebarData
  const rootDocArr = []
  const categoryArr = []
  const categoryMap = {}
  nodes.forEach((node) => {
    const {
      frontmatter: { category, title, slug, order, isCategoryRoot, anchorLinks }
    } = node
    if (!category) {
      // don't give a slug of "index" part of the path here ..
      // the path will just be /docs/ or /customize/ etc
      // this is different for the categories
      const pathName = slug === "index" ? `/${path}` : `/${path}/${slug}`
      rootDocArr.push({
        title,
        path: pathName,
        sublinks: null,
        order,
        anchorLinks
      })
    } else {
      if (!categoryMap[category]) {
        categoryMap[category] = []
      }

      if (isCategoryRoot) {
        categoryArr.push({
          title, // uppercase the first letter later
          categoryName: category, // in case I change it from the title
          isCategoryRoot: true,
          path: `/${path}/${slug}`,
          sublinks: null, // get changed into an array later
          order,
          anchorLinks
        })
      } else {
        categoryMap[category].push({
          title,
          path: `/${path}/${slug}`,
          order,
          anchorLinks
        })
      }
    }
  })

  // ok now loop through the sidebarLinkArr. If there's sublinks, fil them in

  categoryArr.forEach((entry) => {
    const category = entry.categoryName
    entry.sublinks = categoryMap[category]
  })

  // the root docs will go first, sorted by an order property,  and then the categories
  // in alphabetical order, and then the sublinks (in a category) are sorted by a frontmatter "order" property
  // the anchor links are already determined in the frontmatter defintion
  rootDocArr.sort((a, b) => a.order - b.order)
  categoryArr.sort((a, b) => {
    return a.order - b.order
  })

  categoryArr.forEach((item) => {
    const { sublinks } = item

    if (sublinks) {
      sublinks.sort((a, b) => {
        return a.order - b.order
      })
    }
  })

  const sidebarLinkArr = [...rootDocArr, ...categoryArr]

  // capitalize category name
  // .. hm.. oh yeah. Fix anchor links

  return (
    <>
      <div className="w-0">
        <div
          onClick={() => setSidebarOpen(true)}
          className={`${
            sidebarOpen ? "display-none" : "display-flex"
          } text-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-magenta-lg hover:shadow-blue-lg bg-background-ltr items-center justify-center bg-background z-5 text-magenta hover:text-blue`}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div
        id="sidebar"
        className={`${
          layoutStyles.sidebar
        }  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  ${
          sidebarOpen ? "" : "display-none"
        }`}
      >
        <nav className="p-md">
          <span className={`${wideScreen ? "display-none" : ""} `}>
            <FontAwesomeIcon
              className={`cursor-pointer hover:text-magenta text-magenta hover:text-blue text-lg py-sm`}
              onClick={() => setSidebarOpen(false)}
              icon={faX}
            />
          </span>
          <ul className="display-flex flex-col line-height-lg">
            {sidebarLinkArr.map((entry) => {
              const {
                isCategoryRoot,
                categoryName,
                path,
                title,
                sublinks,
                anchorLinks
              } = entry

              if (isCategoryRoot) {
                const upperCaseTitle =
                  title.charAt(0).toUpperCase() + title.slice(1)

                const highlightLink =
                  `${process.env.PATH_PREFIX}${path}/` === pathname

                return (
                  <li key={`${path} ${title}`}>
                    <span
                      className={`${
                        highlightLink ? "text-magenta" : ""
                      } font-large hover:text-magenta `}
                    >
                      <Link to={path}>{upperCaseTitle}</Link>
                    </span>
                    {anchorLinks && (
                      <ul className="line-height-md ">
                        {anchorLinks.map((anchorLink, i) => {
                          // name of is a bit different, I don't think anchor links are a full "path" (might need to refacto later)
                          const { title, link } = anchorLink

                          return (
                            <li
                              key={`${title} ${link}`}
                              className={`pl-md text-md ${
                                i == anchorLinks.length - 1 ? "mb-xs" : ""
                              } `}
                            >
                              <CustomAnchor path={path} to={link}>
                                {title}
                              </CustomAnchor>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                    {sublinks && (
                      <ul>
                        {sublinks.map((link, i) => {
                          const { title, path: subLinkPath, anchorLinks } = link

                          const highlightLink =
                            `${process.env.PATH_PREFIX}${subLinkPath}/` ===
                            pathname

                          return (
                            <li
                              key={`${title} ${subLinkPath}`}
                              className={`pl-md font-normal   ${
                                i == sublinks.length - 1 ? "mb-xs" : ""
                              }`}
                            >
                              <span
                                className={`${
                                  highlightLink ? "text-magenta" : ""
                                } font-bold hover:text-magenta`}
                              >
                                <Link to={subLinkPath}>{title}</Link>
                              </span>

                              {anchorLinks && (
                                <ul className="line-height-md ">
                                  {anchorLinks.map((anchorLink) => {
                                    // name of is a bit different, I don't think anchor links are a full "path" (might need to refacto later)
                                    const { title, link } = anchorLink

                                    return (
                                      <li
                                        key={`${title} ${link}`}
                                        className="pl-md text-md hover:text-magenta"
                                      >
                                        <CustomAnchor
                                          path={subLinkPath}
                                          to={link}
                                        >
                                          {title}
                                        </CustomAnchor>
                                      </li>
                                    )
                                  })}
                                </ul>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                )
              }

              const upperCaseTitle =
                title.charAt(0).toUpperCase() + title.slice(1)

              const highlightLink =
                `${process.env.PATH_PREFIX}${path}/` === pathname

              return (
                <li key={`${path} ${title}`}>
                  <span
                    className={`${
                      highlightLink ? "text-magenta" : ""
                    } font-large hover:text-magenta`}
                  >
                    <Link to={path}>{title}</Link>
                  </span>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SideBar
