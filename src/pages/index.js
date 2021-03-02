import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 1 })
  const [textRef, textInView] = useInView({ threshold: 1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }

    if (textInView) {
      controls.start("textVisible")
    }
  }, [controls, inView, textInView])

  const item = {
    hidden: { opacity: 0, y: -200 },
    textVisible: { opacity: 1, y: 0 },
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
                transition={{ delay: 0.8 }}
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
        transition={{ staggerChildren: 0.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="my-3 bg-gray-100 h-96"
      >
        <motion.div className="flex flex-col items-center justify-around w-full h-full text-5xl font-medium md:flex-row">
          <motion.div>legend</motion.div>
          <motion.div>icon</motion.div>
          <motion.div>balding</motion.div>
        </motion.div>
      </motion.section>
      <section className="py-8">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.p
            ref={textRef}
            animate={controls}
            initial="hidden"
            transition={{ staggerChildren: 0.5, type: "spring" }}
            variants={{
              textVisible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            className="text-6xl font-semibold leading-relaxed text-center md:text-10xl md:font-normal"
          >
            <motion.span variants={item}>"Creative</motion.span>
            <motion.span variants={item}> Genius"</motion.span>
          </motion.p>
          <p className="font-bold">- Lee's granny</p>
        </div>
      </section>
    </Layout>
  )
}
