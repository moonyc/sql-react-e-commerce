import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./navbar"
import Footer from "./footer"

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
     <div style={{ marginBottom: "10rem"}}/>
      <main>
       {children}
      </main>
      <Footer style={{bottom: 0}}/>
    </div>
  )
}


export default Layout