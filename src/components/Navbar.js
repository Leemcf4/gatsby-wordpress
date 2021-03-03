import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

function Navbar() {
  const menu = useStaticQuery(graphql`
    query {
      wpgraphql {
        menus {
          nodes {
            menuItems {
              nodes {
                id
                url
                label
                order
              }
            }
          }
        }
        generalSettings {
          url
        }
      }
    }
  `)

  const url = menu.wpgraphql.generalSettings.url
  const menuItems = menu.wpgraphql.menus.nodes[0].menuItems.nodes.map(item => ({
    label: item.label,
    url: item.url.replace(url, ""),
  }))
  console.log(menu)
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between flex-none w-full h-24 px-4 mx-auto space-x-1 bg-white max-w-8xl border-b-1 font-avenir">
      <div>
        <Link
          className="transition-all hover:text-transparent md:mx-2 bg-clip-text bg-gradient-to-r from-red-500 to-indigo-500"
          to="/"
        >
          home
        </Link>
      </div>
      <div className="mx-2">
        {menuItems
          .filter(item => item.url !== "/")
          .map(item => (
            <>
              {" "}
              <Link
                className="mx-1 transition-all hover:text-transparent md:mx-2 bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
                key={item.id}
                to={item.url}
              >
                {item.label}
              </Link>
            </>
          ))}
      </div>
    </header>
  )
}

export default Navbar
