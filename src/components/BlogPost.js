import { Link } from "gatsby"
import React from "react"
import { AnimatePresence, motion } from "framer-motion"

function BlogPost({ id, title, uri, excerpt, image }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
        whileHover={{ scale: 1.05 }}
        exit={{ scale: 2 }}
        className="flex flex-col m-6 border shadow-sm rounded-3xl md:w-96 font-avenir"
      >
        <motion.div>
          <div className="rounded-t-3xl">
            <Link to={`/blog/${uri}`}>
              <img
                className="w-full h-26 object-fit rounded-t-3xl"
                src={image}
                alt=""
              />
            </Link>
            <div className="p-6">
              <h2 className="mb-3 text-2xl font-semibold font-avenir">
                <Link
                  to={`/blog${uri}`}
                  dangerouslySetInnerHTML={{ __html: `${title}` }}
                />
              </h2>
              <div
                className="text-sm font-light font-avenir-book"
                dangerouslySetInnerHTML={{ __html: `${excerpt}` }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BlogPost
