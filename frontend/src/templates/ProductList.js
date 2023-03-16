import React from 'react'
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/ui/layout'
import DynamicToolbar from '../components/product-list/DynamicToolbar'
import ListOfProducts from '../components/product-list/ListOfProducts'

export default function ProductLists({ pageContext: { filterOptions, name, description},
   data: { allStrapiProduct: { edges: products }}}) 
   {
     
   return(
      <Layout>
         <Grid container direction="column" alignItems="center">
            <DynamicToolbar 
            filterOptions={filterOptions}
            name={name}
            description={description}/>
            <ListOfProducts products={products}/>
         </Grid>
      </Layout>
    
   )
}


export const query = graphql`
query GetCategoryProducts($strapiId: Int!) {
  allStrapiProduct(filter: {category: {strapi_id: {eq: $strapiId}}}) {
    edges {
      node {
        strapi_id
        id
        name
        variants {
          color
          id
          size
          style
          price
          images {
            url
          }
        }
      }
    }
  }
}
`