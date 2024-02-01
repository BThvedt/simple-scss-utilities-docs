// Step 1: Import React
import React from "react"
import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner/Banner"
// import "../css/ssu.css"
// import "../../simple-scss-utilities/ssu.scss"
import "../scss/custom.scss"
import "../css/ssu.css"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <Banner />
      <main className="max-w-container mx-auto p-lg">
        <div>
          <p>
            <span class="font-bold">
              Wow that's an awesome banner isn't it!
            </span>{" "}
            No wonder you're interested in my scss framework. Ok, ok, I hate to
            let you down but the banner wasn't made with the framework.
            Everything else on this site was though! It's a work in
            progress..and I'll be making updates.. but in the meantime, what's
            this for?
          </p>

          <h1 className="font-header align-center mt-xl font-4xl">
            - Simple Scss Utilites -
          </h1>

          <div className="row gap-lg">
            <div className="col-12 scr:col-4">
              <h3 className="font-large font-xl mb-s">For Simplicity</h3>
              <p>
                I just want to write SCSS. I don't want a framework to make my
                design decisions for me. But I do like utility classes.
              </p>
              <p>
                Yes tailwind is pretty good. And SCSS and PostCSS can do
                somewhat different things. But y'konw what? I like just writing
                SCSS! I made some files to generate 90% of the utility classes I
                usually will use. The rest is up to me to do it how I wanna.
                That's it!
              </p>
              <p>I just wanna write SCSS</p>
              <p>Philosophy</p>
            </div>
            <div className="col-12 scr:col-4">
              <h3 className="font-large font-xl mb-s">For Creativitiy</h3>

              <p>
                I know how I want things to look. I want a framework to keep my
                stylesheets lean and consistant, but not as a constraint. Why
                have a framework with rules? Help then get out of the way. Maybe
                I want wacky fonts and buttons. Maybe in my personal projects I
                wanna get a little weird. Just give me utility classes!
              </p>
              <p>
                I want to encourge writing your own scss to your satisfaction.
                Let's have some fun.
              </p>
              <p>Docs</p>
            </div>
            <div className="col-12 scr:col-4 p-xs">
              <h3 className="font-large font-xl mb-s">For Customization</h3>
              <p>
                Everything is in a variables file, all in plain scss. Aouple
                dozen rules for colors, breakpoints, sizes, etc. It generates a
                ton of css but purging isn't hard. Add/remove things at your
                will! Have a design sheet? Edit the varibles to your own font
                sizes, colors, - or anything - and tayloring the classes to your
                design is just that easy. The SCSS is not exhaustive. I only
                wrote it to handle the things I personally use over and over.
                But adding and removing isn't tough! You can make it your own.
                Customize! Instructions included.
              </p>
              <p>Customization</p>
            </div>
          </div>
          <p>
            In short, I just wanted some scss files that generated utility
            classes to my satisfaction. So I'm making some! I'll use the utility
            classes to cut down on 90% of the style bloat. Basically, to handle
            90% of the styles. The other 10% is up to the developer. I'll be
            adding documentation as things get working. In the meantime, thanks
            for dropping by!
          </p>
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
