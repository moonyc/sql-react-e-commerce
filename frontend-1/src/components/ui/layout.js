import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./navbar"

function Layout({ children }) {
    const data = useStaticQuery(graphql` 
    query MyQuery {
      allStrapiCategory {
        edges {
          node {
            name
            strapi_id
          }
        }
      }
    }`)
    
  return (
    <div>
     <NavBar categories={data.allStrapiCategory.edges}/>
      <main>
       {children}
      </main>
      
    </div>
  )
}


export default Layout