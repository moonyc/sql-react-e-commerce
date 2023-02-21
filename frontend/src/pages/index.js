import * as React from "react"
import Layout from "../components/ui/layout"
import HeroBlock from "../components/home/hero"
import PromotionalProducts from "../components/home/PromotionalProducts"
import FeaturedProducts from "../components/home/FeaturedProducts"

const IndexPage = () => {
  return (
    <Layout>
      <HeroBlock/>
      <PromotionalProducts/>
      <FeaturedProducts/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
