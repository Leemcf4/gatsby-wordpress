import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-full">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
