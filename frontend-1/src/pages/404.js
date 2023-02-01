import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/ui/layout"



const NotFoundPage = () => {
  return (
    <Layout>
      <h1>This is a 404 page</h1>
      <Link to="/">Go back to the home page</Link>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
