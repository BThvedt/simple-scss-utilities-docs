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
