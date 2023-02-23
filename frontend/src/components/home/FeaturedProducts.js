import React, {useState} from 'react'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import  Typography   from '@material-ui/core/Typography'
import  IconButton  from '@material-ui/core/IconButton'
import {useStaticQuery, graphql} from 'gatsby'
import { makeStyles } from '@material-ui/core'

import featuredAdornment from '../../images/featured-adornment.svg'


const useStyles = makeStyles(theme => ({
   background: {
    margin: '0rem',
    backgroundImage: `url(${featuredAdornment})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '180rem',
    padding: '0 2.5rem'
    
   },
   featured: {
    width: '18rem',
   },
   frame: {
    backgroundColor: theme.palette.common.offBlack,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: 0,
    width: '21.5rem',
    height: '22rem',
    boxSizing: 'border-box',
    boxShadow: theme.shadows[5],
    position: 'absolute'
   },
   slide: {
    backgroundColor: theme.palette.primary.main,
    height: '16.5rem',
    width: '21.5rem'
   },
   slideLeft: {
     transform: 'translate(-24.4rem, 0rem)'
   },
   slideRight: {
    transform: 'translate(24.4rem, 0rem)'
   },
   productContainer: {
    margin: '5rem 0'
   },

}))

export default function FeaturedProducts(){
    const classes = useStyles()
    const [expanded, setExpended] = useState(null)

    const data = useStaticQuery(graphql`
    query GetFeatured {
        allStrapiProduct(filter: {featured: {eq: true}}) {
          edges {
            node {
              name
              strapi_id
              variants {
                price
                images {
                  url
                }
              }
            }
          }
        }
      }`)
     console.log(data)
      return (
        <Grid container direction="column" justifyContent="center" classes={{root: classes.background}}>
           {data.allStrapiProduct.edges.map(({node}, i) => {
            const alignment = 
            i === 0 || i === 2 || i === 4 ? "flex-start" : "flex-end"
            
            return(
            <Grid item container justifyContent={alignment} key={node.strapiId} classes={{root: classes.productContainer}} alignItems="center">
               
                <IconButton onCLick={() => expanded === i ? setExpended(null) : setExpended(i)} classes={{root: classes.frame}}>
                    <img src={process.env.GATSBY_STRAPI_URL + 
                            node.variants[1].images[0].url} 
                            alt={node.name}
                            className={classes.featured}
                            />
                </IconButton>
                <Grid container direction ="column" classes={{root: clsx(classes.slide, {
                  [classes.slideLeft]: expanded === i && alignment === 'flex-end',
                  [classes.slideRight]: expanded === i && alignment === 'flex-start'
                })}}> 
                </Grid>
               </Grid>
            
           )})}
        </Grid>
      )
}