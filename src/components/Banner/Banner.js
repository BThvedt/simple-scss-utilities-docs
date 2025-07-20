import React, { useEffect, useMemo, useState } from "react"
import { loadSlim } from "@tsparticles/slim"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import * as BannerStyles from "./banner.module.scss"

const Banner = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = (container) => {
    console.log("")
  }

  const options = useMemo(
    () => ({
      // background: {
      //   color: {
      //     value: "rgba(0,100,100,0.4)"
      //   }
      // },
      fpsLimit: 120,
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false, mode: "grab" },
          onclick: { enable: false, mode: "push" },
          resize: true
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
        }
      },
      particles: {
        number: {
          value: 17,
          density: { enable: false, value_area: 1443 }
        },
        color: { value: "#6216cf" },
        shape: {
          type: "edge",
          stroke: { width: 0, color: "#5a00ff" },
          polygon: { nb_sides: 11 },
          image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
          value: 0.25,
          random: true,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 130,
          random: true,
          anim: { enable: true, speed: 10, size_min: 40, sync: false }
        },
        line_linked: {
          enable: false,
          distance: 200,
          color: "#ffffff",
          opacity: 1,
          width: 2
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "top",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      detectRetina: true,
      style: {
        position: "absolute"
      },
      autoPlay: true
    }),
    []
  )

  return (
    // <section id="banner">
    <section id={BannerStyles.banner}>
      {/* <div id="particles-js" className={BannerStyles.particlesJs}></div> */}
      {init && (
        <Particles
          id="tsparticles"
          className={BannerStyles.particlesJs}
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      <div id={BannerStyles.textContainer}>
        <div id={BannerStyles.moveX}>
          <div id={BannerStyles.moveY}>
            <h1 id="banner-text">
              <span className={BannerStyles.word}>
                <span>S</span> <span>i</span> <span>m</span> <span>p</span>
                <span>l</span> <span>e</span>
              </span>
              <span>
                <span className={BannerStyles.word}>
                  <span>S</span> <span>c</span> <span>s</span> <span>s</span>
                </span>
                <span className={BannerStyles.word}>
                  <span>U</span> <span>t</span> <span>i</span> <span>l</span>
                  <span>i</span> <span>t</span> <span>e</span> <span>s</span>
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* <Script type="text/javascript" src={"../../../particles.min.js"} />
      <Script type="text/javascript" src={"../../../stats.min.js"} />
      <Script type="text/javascript" src={"../../../bubbles.js"} /> */}
    </section>
  )
}

export default Banner
