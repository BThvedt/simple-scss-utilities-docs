import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner/Banner"
import "../../simple-scss-utilities/ssu.scss"
import "../scss/custom.scss"
import { Link } from "gatsby"
// import "../css/ssu.css"

const IndexPage = () => {
  return (
    <Layout>
      <Banner />
      <main className="max-w-container mx-auto p-lg letter-spacing-md text-lg">
        <div>
          <p className="line-height-lg letter-spacing-md line-height-lg mt-md">
            <span className="font-bold">Wow what a great banner!</span> No
            wonder you're interested in my framework. Ok, the banner wasn't made
            with it. But everything else was! Aside from the banner, I use
            utility classes and 4 lines of Scss. Now that's a lean stylesheet!
          </p>

          <h1 className="font-header align-center mt-xl mb-md text-5xl">
            <span className="max-mob:display-none">-</span> Simple Scss Utilites
            <span className="max-mob:display-none">-</span>
          </h1>

          <div className="row gap-lg">
            <div className="col-12 scr:col-4">
              <h3 className="font-large text-2xl mb-lg">For Simplicity</h3>
              <p className="line-height-lg mb-xl">
                There's no "rules" about how to use this framework. Don't worry
                if you're doing it "right" or not. The concept couldn't be
                simpler. Change the variables to match your theme. Use utility
                classes to cut down on the SCSS bloat. Write the rest how you
                want!
              </p>
              <p className="font-large text-xl  font-bold text-blue hover:text-magenta cursor-pointer">
                <Link to="/install">Install</Link>
              </p>
            </div>
            <div className="col-12 scr:col-4">
              <h3 className="font-large text-2xl mb-lg">For Creativitiy</h3>
              <p className="line-height-lg mb-xl">
                I don't try to do everything for you, or make decisions for you.
                I encourage you to write your own SCSS. Put your own stamp and
                style on projects! The utility classes are there to be useful,
                then get out of your way.
              </p>

              <p className="font-large text-xl font-bold text-blue hover:text-magenta cursor-pointer">
                <Link to="/docs">Docs</Link>
              </p>
            </div>
            <div className="col-12 scr:col-4 p-xs">
              <h3 className="font-large text-2xl mb-lg">For Customization</h3>
              <p className="line-height-lg mb-xl">
                All the variables are in one file. Call me crazy but I think if
                you can develop a website, you can certinaly change a variable's
                value. I (hope I) made everything super easy. Change anything
                you want! Go wild!
              </p>
              <p className="font-large text-xl  font-bold text-blue hover:text-magenta cursor-pointer">
                <Link to="/customize">Customize</Link>
              </p>
            </div>
          </div>
          <p className="line-height-lg letter-spacing-md mt-2xl mb-3xl">
            In short, when I'm goofing off on my own, I like writing my own
            SCSS. I also like utility classes. My ideal framework is where the
            utility can do most of the standard stuff, the boring stuff. That's
            where they stop. The rest is up to me! For me, it's the sweet spot.
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
