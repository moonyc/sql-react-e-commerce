import React, { useState, useRef, useEffect} from 'react'
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
    marginBottom: '4rem',
    [theme.breakpoints.only('md')]:
    {
      marginTop: '1rem'
    }
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

export default function ProductLists({ pageContext: { filterOptions: options, name, description},
   data: { allStrapiProduct: { edges: products },
  },
}) {
   const classes = useStyles()
   const [layout, setLayout] = useState("grid") 
   const [page, setPage] = useState(1)
   const [filterOptions, setFilterOptions] = useState(options)
   const scrollRef = useRef(null)

   const scroll = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth'})
   }

   // By using useEffect without
   // specifying a list of dependencies,
   //  the code will run in everyrerender.
   useEffect(() => {
    setPage(1)
   },[filterOptions, layout])

   const productsPerPage = layout === 'grid' ? 8 : 4
   
   
   // Logic for filtering 

   var content = []
   products.map((product, index) => product.node.variants.map(variant => content.push({ product: index, variant: variant })))


   let isFiltered = false
   let filters = {}
   let filteredProducts = []
   /* The filter method passes a function that tests each item. */

   Object.keys(filterOptions)
       .filter(option => filterOptions[option] !== null)
       .map(option => {
           filterOptions[option].forEach(value => {
               if (value.checked) {
                   isFiltered = true
                   
                   if(filters[option] === undefined) {
                       filters[option] = []
                   }

                   if(!filters[option].includes(value)) {
                       filters[option].push(value)
                   }

                   content.forEach(item => {
                       if (option === 'Color') {
                           if (item.variant.colorLabel === value.label &&
                               !filteredProducts.includes(item)) 
                               {
                               filteredProducts.push(item)
                               }
                       } else if (item.variant[option.toLowerCase()] === value.label &&
                       !filteredProducts.includes(item)) {
                           filteredProducts.push(item)
                       }
                   })
               }
           })
       })

   Object.keys(filters).forEach(filter => {
       filteredProducts = filteredProducts.filter(item => {
           let valid
            
           filters[filter].some(value => {
               if(filter === 'Color') {
                   if (item.variant.colorLabel === value.label) {
                       valid = item
                   }
               } else if (item.variant[filter.toLowerCase()] === value.label) {
                   valid = item
               }
           })
           return valid
       })
   })

   if (isFiltered) {
       content = filteredProducts
   }

   const numberOfPages = Math.ceil( content.length / productsPerPage )
   return(
      <Layout>
         <Grid container direction="column" alignItems="center">
         <div ref={scrollRef}/>
            <DynamicToolbar 
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
            name={name}
            description={description}
            layout={layout}
            setLayout={setLayout}
            />
            <ListOfProducts 
              page={page} 
              productsPerPage={productsPerPage} 
              layout={layout} 
              products={products}
              content={content}
              filterOptions={filterOptions}
              />
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
        category {
          name
        }
        variants {
          color
          id
          size
          style
          price
          colorLabel,
          images {
            url
          }
        }
      }
    }
  }
}
`