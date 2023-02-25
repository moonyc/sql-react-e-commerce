import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import  Typography  from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Carousel from 'react-spring-3d-carousel'
import clsx from 'clsx'
import { useStaticQuery, graphql } from 'gatsby'
import { makeStyles  } from '@material-ui/core/styles'

import promoAdornment from '../../images/promo-adornment.svg'
import explore from '../../images/explore.svg'


const useStyles = makeStyles(theme => ({
    mainContainer: {
        backgroundImage: `url(${promoAdornment})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '70rem',
        paddingLeft: '10rem',
        paddingRight: '10rem',
        paddingTom: '30rem',
        paddingBottom: '10rem'  
    },
    productName: {
        color: '#fff'
    },
    iconButton: {
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    carouselImage: {
        height: '25rem',
        width: '20rem',
        backgroundColor: 'rgba(225,225,225, 0.2)',
        borderRadius: 20,
        boxShadow: theme.shadows[5]
    },
    carouselContainer: {    
        marginLeft:  '15rem'
    },
    space: {
        margin: '0rem 15rem',
        marginBottom: '10rem'
    },
    explore: {
        textTransform: 'none',
        marginRight: '2rem'
    },
    descriptionContainer: {
        textAlign: 'right',
    }

}))

export default function PromotionalProducts() {
    const classes = useStyles()
    const [selectedSlide, setSelectedSlide] = useState(0)

    const data = useStaticQuery(graphql`
    query GetPromo {
    allStrapiProduct(filter: {promo: {eq: true}}) {
      edges {
        node {
          name
          strapi_id
          description 
          variants {
            images {
              url
            }
          }
        }
      }
    }
  }`)

  let slides = []
  
  data.allStrapiProduct.edges.map(({ node }, i) => slides.push(
    {
        key: i,
        content: (
            <Grid container direction='column' alignItems='center'>
                <Grid item>
                    <IconButton disableFocusRipple disableRipple 
                    onClick={() => setSelectedSlide(i)}
                    classes={{root: clsx(classes.iconButton, {
                        [classes.space]: selectedSlide !== i
                    }) }}>
                         <img 
                         src={
                            process.env.GATSBY_STRAPI_URL + 
                            node.variants[1].images[0].url}
                            alt={`design-${i}`}
                            className={classes.carouselImage}
                             />
                    </IconButton>
                </Grid>
                <Grid item>
                   {selectedSlide === i ? (
                    <Typography variant="h1" classes={{root: classes.productName}}>
                    {node.name.split(" ")[0]}
                    </Typography>
                   ) : null}
                </Grid>
            </Grid>
        ),
        description: node.description
    }
  ))
  console.log()
    return(
        <Grid container 
        justifyContent='space-between'
        alignItems="center" 
        classes={{root: classes.mainContainer}}
        >
            <Grid item classes={{root: classes.carouselContainer}}> 
                <Carousel
                slides={slides}
                goToSlide={selectedSlide}
                />
            </Grid>
            <Grid item classes={{root: classes.descriptionContainer}}>
             <Typography variant="h2" paragraph>
              {slides[selectedSlide].description}
             </Typography>
             <Button>
                <Typography variant="h4" classes={{root: classes.explore}}>
                    Explore
                </Typography>
                <img src={explore} alt="go to the product page"/>
             </Button>
            </Grid>
        </Grid>
    )
}