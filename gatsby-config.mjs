import path from "path"
import { fileURLToPath } from "url"
import remarkGfm from "remark-gfm"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://github.com/tdudkowski/gatsby-homepage4/blob/main/gatsby-config.mjs

const config = {
  pathPrefix: "/simple-scss-utilities-docs/",
  siteMetadata: {
    title: `Simple SCSS Utilities`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sitemap",
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [
            // Add GitHub Flavored Markdown (GFM) support
            remarkGfm,
            {
              resolve: `gatsby-remark-images`,
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 590
              }
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID" // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/SSU-logo.png"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: "./content/docs/"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "customize",
        path: "./content/customize/"
      }
    }
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "components",
    //     path: "./content/components/"
    //   }
    // }
  ]
}

export default config

// {
//   resolve: 'gatsby-plugin-mdx',
//   options: {
//     gatsbyRemarkPlugins: [
//       {
//         resolve: `gatsby-remark-images`,
//         options: {
//             // options here
//         },
//       },
//     ],
//     mdxOptions: {
//       remarkPlugins: [
//         remarkGfm,
//       ],
//     },
//   },
// },
