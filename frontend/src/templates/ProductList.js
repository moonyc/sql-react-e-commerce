import React, { useState, useRef} from 'react'
import { graphql } from 'gatsby'
import Pagination from '@material-ui/lab/Pagination'
import { Fab } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/ui/layout'
import DynamicToolbar from '../components/product-list/DynamicToolbar'
import ListOfProducts from '../components/product-list/ListOfProducts'

const useStyles = makeStyles(theme =>({
   fab: {
    alignSelf: 'flex-end',
    marginRight: '2rem',
    marginBottom: '2rem',
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: '4rem',
    width: '4rem',
    height: '4rem'
   },
   pagination: {
    alignSelf: 'flex-end',
    marginRight: "2%",
    marginTop: '-3rem',
    marginBottom: '4rem'
   },
   "@global" : {
    '.MuiPaginationItem-root': {
      fontFamily: 'Montserrat',
      fontSize: '1rem',
      color: theme.palette.primary.main,
      "&.Mui-selected": {
        color: '#fff'
      }
    }
   }
}))

export default function ProductLists({ pageContext: { filterOptions, name, description},
   data: { allStrapiProduct: { edges: products },
  },
}) {
   const classes = useStyles()
   const [layout, setLayout] = useState("grid") 
   const [page, setPage] = useState(1)
   const scrollRef = useRef(null)

   const scroll = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth'})
   }

   const productsPerPage = layout === 'grid' ? 8 : 4
   var numberOfVariants = 0
   products.map(product => numberOfVariants += product.node.variants.length)

   const numberOfPages = Math.ceil( numberOfVariants / productsPerPage )
   return(
      <Layout>
         <Grid container direction="column" alignItems="center">
         <div ref={scrollRef}/>
            <DynamicToolbar 
            filterOptions={filterOptions}
            name={name}
            description={description}
            layout={layout}
            setLayout={setLayout}
            setPage={setPage}
            />
            <ListOfProducts page={page} productsPerPage={productsPerPage} layout={layout} products={products}/>
            <Pagination 
            color="primary" 
            count={numberOfPages} 
            page={page} 
            onChange={(event, newPage) => setPage(newPage)} 
            classes={{root: classes.pagination}}
            />
            <Fab onClick={scroll} color="primary" classes={{root: classes.fab}}>
              ^
            </Fab>
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