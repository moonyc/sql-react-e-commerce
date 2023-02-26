import * as React from "react"
import Layout from "../components/ui/layout"
import HeroBlock from "../components/home/Hero"
import PromotionalProducts from "../components/home/PromotionalProducts"
import FeaturedProducts from "../components/home/FeaturedProducts"
import MarketingButtons from "../components/home/MarketingButtons"
import CallToAction from "../components/home/CallToAction"

const IndexPage = () => {
  return (
    <Layout>
      <HeroBlock/>
      <PromotionalProducts/>
      <FeaturedProducts/>
      <MarketingButtons />
      <CallToAction />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
