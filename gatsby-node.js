const path = require("path")


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve("src/templates/project.jsx")

  const result = await graphql(`
  {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/projects/"}}
      sort: { order: DESC, fields: [frontmatter___project_post_date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`)

if (result.errors) {
  reporter.panicOnBuild(`Error while running GraphQL query.`)
  return
}

result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  createPage({
    path: node.frontmatter.path,
    component: projectTemplate,
    context: {} // additional data can be passed via context
  })
})

}
