const path = require(`path`)
// exports.createPages = async ({ graphql, actions }) => {
//   const { createRedirect } = actions

//   // I bet there's a better way to do this..
//   // hmmm this works
//   // createRedirect({
//   //   fromPath: `/asdf`,
//   //   toPath: `/`,
//   //   isPermanent: true,
//   //   redirectInBrowser: true
//   // })

//   // and this works
//   createRedirect({
//     fromPath: `/asdf`,
//     toPath: `/philosophy`,
//     isPermanent: true,
//     redirectInBrowser: true
//   })

//   // this works..
//   createRedirect({
//     fromPath: `/info/asdf`,
//     toPath: `/philosophy/`,
//     isPermanent: true,
//     redirectInBrowser: true
//   })

//   // this doesn't?
//   createRedirect({
//     fromPath: `/info/philosophy`,
//     toPath: `/philosophy/`,
//     isPermanent: true,
//     redirectInBrowser: true
//   })

//   // createRedirect({
//   //   fromPath: `/page/philosophy`,
//   //   toPath: `/philosophy`
//   // })
// }

// exports.createPages = async ({ graphql, actions: { createPage } }) => {
//   const result = await graphql(`
//     query {
//       allMdx {
//         nodes {
//           id
//           frontmatter {
//             type
//             slug
//           }
//           internal {
//             contentFilePath
//           }
//         }
//       }
//     }
//   `)

//   const { nodes } = result.data.allMdx
//   const postTemplate = path.resolve(`./src/templates/post.js`)

//   nodes.forEach((node) => {
//     const type = node.frontmatter.type
//     const slug = node.frontmatter.slug
//     createPage({
//       path: `/${type}/${slug}`,
//       component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
//       context: {
//         id: node.id
//       }
//     })
//   })
// }
