import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

import Layout from "../components/Layout"

import { useInView } from "react-intersection-observer"

export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.8 })
  const [textRef, textInView] = useInView({ threshold: 1 })
  const [infoRef, infoInView] = useInView({ threshold: 1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }

    if (textInView) {
      controls.start("textVisible")
    }
    if (infoInView) {
      controls.start("infoVisible")
    }
  }, [controls, inView, textInView, infoInView])

  const rightItem = {
    hidden: { opacity: 0, x: 500 },
    textVisible: { opacity: 1, x: 0 },
  }
  const leftItem = {
    hidden: { opacity: 0, x: -500 },
    textVisible: { opacity: 1, x: 0 },
  }
  const infoItem = {
    hidden: { opacity: 0 },
    infoVisible: { opacity: 1 },
  }
  return (
    <Layout>
      <section className="flex w-full py-24 h-104">
        <motion.div
          initial={{ x: -400, rotate: -90 }}
          animate={{ x: 0, rotate: 0 }}
          transition={{ velocity: 0.5, type: "spring" }}
          className="relative ml-2 mr-auto bg-gradient-to-br rounded-3xl md:ml-96 min-w-32 w-98 h-96 from-purpleLee to-purpleLeeDark "
        >
          <div className="absolute right-0 ml-2 -bottom-24 md:bottom-0 text-8xl md:-right-48 font-avenir ">
            <div className="flex flex-col flex-wrap-reverse space-x-4 md:flex-row">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white "
              >
                I am
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className=""
              >
                Lee.
              </motion.span>
            </div>
          </div>
        </motion.div>
      </section>
      <motion.section
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="my-3 bg-gray-100 h-96"
      >
        <motion.div
          ref={infoRef}
          animate={controls}
          initial="hidden"
          transition={{ staggerChildren: 0.5, type: "spring" }}
          variants={{
            infoVisible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="flex flex-col items-center justify-around w-full h-full text-5xl font-medium md:flex-row font-avenir"
        >
          <motion.div variants={infoItem}>legend</motion.div>
          <motion.div variants={infoItem}>icon</motion.div>
          <motion.div transition={{ delay: 1.5 }} variants={infoItem}>
            bald
          </motion.div>
        </motion.div>
      </motion.section>
      <section className="py-8">
        <div className="flex flex-col items-center content-center justify-center text-center font-avenir">
          <motion.p
            ref={textRef}
            animate={controls}
            initial="hidden"
            transition={{ staggerChildren: 0.5, type: "spring" }}
            // variants={{
            //   textVisible: { opacity: 1 },
            //   hidden: { opacity: 0 },
            // }}
            className="flex flex-col items-center content-center justify-center text-6xl font-semibold leading-relaxed md:text-10xl md:font-normal"
          >
            <motion.div variants={rightItem}>"Creative</motion.div>
            <motion.div variants={leftItem} className="ml-8 md:ml-12">
              <span> </span> Genius"
            </motion.div>
          </motion.p>
          <motion.p className="font-bold ">- Lee's granny</motion.p>
        </div>
      </section>
    </Layout>
  )
}
