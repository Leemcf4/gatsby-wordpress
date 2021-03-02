exports.createPages = async ({ graphql, actions }) => {
  const GET_PAGES = `
  query {
    wpgraphql {
      pages {
        nodes {
          id
          uri
          isFrontPage
        }
      }
    }
  }
  
`
  const result = await graphql(GET_PAGES)

  result.data.wpgraphql.pages.nodes.forEach(page => {
    console.log(page)
    actions.createPage({
      path: page.isFrontPage ? "/" : page.uri,
      component: require.resolve("./src/templates/page-template.js"), //
      context: {
        id: page.id,
      },
    })
  })
}
