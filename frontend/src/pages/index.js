import * as React from "react"
import Layout from "../components/ui/layout"
import HeroBlock from "../components/home/hero"

const IndexPage = () => {
  return (
    <Layout>
      <HeroBlock/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
