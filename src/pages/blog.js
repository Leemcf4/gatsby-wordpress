import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import BlogPost from "../components/BlogPost"

export const query = graphql`
  query {
    wpgraphql {
      posts {
        nodes {
          id
          title
          uri
          excerpt
          featuredImage {
            node {
              sourceUrl(size: MEDIUM)
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const posts = data.wpgraphql.posts.nodes
  console.log(posts)

  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        {posts.map(post => (
          <BlogPost
            key={post.id}
            id={post.id}
            uri={post.uri}
            title={post.title}
            excerpt={post.excerpt}
            image={post.featuredImage?.node.sourceUrl}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Blog
