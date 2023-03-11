import React from 'react'
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/ui/layout'
import DynamicToolbar from '../components/product-list/DynamicToolbar'

export default function ProductLists({ pageContext: { filterOptions, name, description} },
   data) {
      console.log(data)
   return(
      <Layout>
         <Grid container direction="column" alignItems="center">
            <DynamicToolbar 
            filterOptions={filterOptions}
            name={name}
            description={description}/>
         </Grid>
      </Layout>
    
   )
}


export const query = graphql`
query GetCategoryProducts($id: String!) {
  allStrapiProduct(filter: {category: {id: {eq: $id}}}) {
    edges {
      node {
        strapi_id
        name
        variants {
          color
          id
          price
          size
          style
          images {
            url
          }
        }
      }
    }
  }
}
`