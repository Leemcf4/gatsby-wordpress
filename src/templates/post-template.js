import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { motion } from "framer-motion"

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl(size: POST_THUMBNAIL)
          }
        }
        comments {
          nodes {
            id
            dateGmt
            content(format: RENDERED)
            databaseId
            replies {
              nodes {
                databaseId
                dateGmt
                content(format: RENDERED)
                author {
                  node {
                    databaseId
                    name
                  }
                }
              }
            }
            author {
              node {
                databaseId
                name
              }
            }
          }
        }
      }
    }
  }
`

const PostTemplate = ({ data }) => {
  console.log(data)
  const { title, content, featuredImage, comments } = data.wpgraphql.post

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center content-center justify-center w-full mx-auto md:w-102"
      >
        <div className="flex flex-col mx-1 rounded md:mx-0">
          <a
            className="p-3 cursor-pointer font-avenir"
            onClick={() => window.history.back()}
          >
            back
          </a>
          <img
            src={featuredImage?.node.sourceUrl}
            alt=""
            className="mb-3 rounded shadow-sm"
          />
          <div className="p-6">
            <h1
              className="mb-3 text-3xl font-avenir"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div
              className="mb-10 font-avenir-book"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          <div className="flex flex-col content-center justify-center mx-auto mt-5 w-80 md:w-100 font-avenir">
            <div className="divide-y-1">
              <h2 className="self-end mb-3 text-gray-500 divide-gray-100 ">
                Comments
              </h2>
            </div>

            {comments.nodes.map(comment => (
              <>
                <div key={comment.id} className="pt-3 border-gray-200 rounded">
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">
                      {comment.author?.node}
                    </p>
                    <p className="text-sm text-gray-400">{comment.dateGmt}</p>
                  </div>
                  <div>
                    <p
                      className="pt-2 text-sm font-avenir-book"
                      dangerouslySetInnerHTML={{
                        __html: `${comment.content} `,
                      }}
                    />
                  </div>
                </div>
                <div className="self-end text-gray-400">reply</div>
              </>
            ))}
            <div className="flex flex-col">
              <form>
                <input
                  className="w-full px-6 py-3 "
                  type="textarea"
                  placeholder="comment"
                />
                <div className="flex">
                  <button type="submit" className="self-end">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}

export default PostTemplate
