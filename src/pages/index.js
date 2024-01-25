// Step 1: Import React
import * as React from "react"
import Layout from "../components/Layout"
// import "../css/ssu.css"
import "../../simple-scss-utilities/ssu.scss"
import "../scss/custom.scss"
import "../css/ssu.css"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <div className="max-w-container m-auto">
          <h1>
            This is a work in progress that'll be coming together in the next
            few weeks. I'm trying to build the site and simotaneously tweak the
            library in order to built it (plus I'm new at Gatsby) so it'll be a
            little while but since I don't think a lot of people will look I
            think it'll be fine lol
          </h1>
          {/* <h1>
            Like SCSS? Like Utility Classes? Like being Creative? I like all
            three, and I wanted a framework that helps but doesn't get in the
            way. So I made this! How to install:
          </h1> */}
          {/* <div className="row gap-lg justify-center">
            <div className="flex col-12 scr:col-4">
              <h3 className="font-large font-xl mb-s">For Creativitiy</h3>
              <p>
                Enough utility classes to handle most things. Enough freedom to
                do your own thing. I like to go a little wild with styles (what
                gave it away?). But I'm also a fan of utility classes for
                cutting down stylesheet bloat to almost nothing.
              </p>
              <p>
                Why should a framework handle everything? It should be a
                framework, not dictate your design. If you like getting just a
                little messy, but just a little, maybe something like this would
                be nice!
              </p>
              {/* <p>
                (move to pilosophy section) Remember when the internet was
                uglier, but also in a way - websites were more exciting? Why do
                frameworks have to try to handle everything? I think an ideal
                framework should handle like 90% of the styles, the rest can be
                up to the designer or dveloper. Let's compramise. Let's still be
                beautiful but a little creative too.
              </p> */}
          {/* <p>Philosophy</p>
            </div>
            <div className="flex col-12 scr:col-4">
              <h3 className="font-large font-xl mb-s">For Simplicity</h3>
              <p>
                The docs are significantly shorter than most frameworks. I just
                put in 90% of the utility classes I would want to use in a
                typical project. That's it. You can still leverage the full
                power of SCSS. Make your own components. Who can't make a button
                or a menu? Frameworks that tried to do those things for you were
                always mysterious to me. Get the boring stuff out of the way.
                Design, innovate, write. Have fun!
              </p>
              <p>Docs</p>
            </div>
            <div className="display-f flex-col items-center col-12 scr:col-4">
              <h3 className="font-large font-xl mb-s">For Customization</h3>
              <p>
                Everything is customizible, all the variables are in the single
                file. Add and remove colors, breakpoints, sizes, fonts, margin
                and padding sizes, grid columns. color modes, it's all there!
                Want to go further? Don't like the class name? Want to add your
                own stuff? Find out here:
              </p>
              <p>Customization</p>
            </div>
          </div> */}
        </div>
      </main>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Simple Scss Utilities</title>
    <meta name="description" content="The docs for Simple Scss Utilities" />
  </>
)

// Step 3: Export your component
export default IndexPage
