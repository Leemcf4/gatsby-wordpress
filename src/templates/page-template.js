import { graphql } from "gatsby"
import React from "react"
import "../styles/global.css"

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
      }
    }
  }
`

function pageTemplate({ data }) {
  console.log(data)
  const { title, content } = data.wpgraphql.page

  return (
    <div>
      <h1
        className="text-blue-400"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default pageTemplate
