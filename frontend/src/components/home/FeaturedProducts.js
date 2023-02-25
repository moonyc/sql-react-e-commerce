import React, {useState} from 'react'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import  Typography   from '@material-ui/core/Typography'
import  IconButton  from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

import {useStaticQuery, graphql} from 'gatsby'
import { makeStyles } from '@material-ui/core'
import Rating from './Rating'

import featuredAdornment from '../../images/featured-adornment.svg'
import frame from '../../images/frame.svg'
import explore from '../../images/explore.svg'

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
    backgroundImage:  `url(${frame})`,
    backgroundColor: theme.palette.common.offBlack,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: 0,
    width: '21.5rem',
    height: '22rem',
    boxSizing: 'border-box',
    boxShadow: theme.shadows[5],
    position: 'absolute',
    zIndex: 1
   },
   slide: {
    backgroundColor: theme.palette.primary.main,
    height: '16.5rem',
    width: '20.5rem',
    transition: 'transform 0.5s ease',
    zIndex: 0,
    padding: '1rem 2rem'
    
   },
   slideLeft: {
     transform: 'translate(-21.5rem, 0rem)',
     
   },
   slideRight: {
     transform: 'translate(21.5rem, 0rem)'
    
   },
   productContainer: {
    margin: '5rem 0'
   },
   exploreContainer: {
    marginTop: "3.5rem",
   },
   exploreButton: {
    textTransform: 'none',
    },
   exploreIcon: {
    height: '1.6rem',
    marginLeft: '1rem'
   },
   chipLabel: {
    ...theme.typography.h5
   },
   chipRoot: {
    backgroundColor: theme.palette.secondary.main
   }

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
     
      return (
        <Grid container direction="column" justifyContent="center" classes={{root: classes.background}}>
           {data.allStrapiProduct.edges.map(({node}, i) => {
            
            const alignment = 
            i === 0 || i  % 2 === 0 ? "flex-start" : "flex-end"
            

            return(
            <Grid item container justifyContent={alignment} key={node.strapiId} classes={{root: classes.productContainer}} alignItems="center">
               
                <IconButton disableRipple  onClick={() => expanded === i ? setExpended(null) : setExpended(i)} classes={{root: classes.frame}}>
                    <img src={process.env.GATSBY_STRAPI_URL + 
                            node.variants[1].images[0].url} 
                            alt={node.name}
                            className={classes.featured}
                            />
                </IconButton>
                <Grid
                container
                direction="column"
                classes={{root: clsx(classes.slide, {
                  [classes.slideLeft]: expanded === i && alignment === 'flex-end',
                  [classes.slideRight]: expanded === i && alignment === 'flex-start'
                })
                }}
                >
                  <Grid item>
                    <Typography variant="h4">{node.name.split(" ")[0]}</Typography>
                    <Grid item>
                      <Rating number={4.5}/>
                    </Grid>
                    <Grid item>
                      <Chip 
                      classes={{root: classes.chipRoot, label: classes.chipLabel}}
                      label={`$${node.variants[0].price}`} /> 
                    </Grid>
                    <Grid item classes={{root: classes.exploreContainer}}>
                      <Button classes={{root: classes.exploreButton}}>
                          <Typography variant="h5">
                            Details
                          </Typography>
                          <img src={explore} alt="got to product details"  className={classes.exploreIcon}/>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
               </Grid>
            
           )})}
        </Grid>
      )
}