import * as React from "react"
import Layout from "../components/ui/layout"
import HeroBlock from "../components/home/hero"
import PromotionalProducts from "../components/home/PromotionalProducts"

const IndexPage = () => {
  return (
    <Layout>
      <HeroBlock/>
      <PromotionalProducts/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
