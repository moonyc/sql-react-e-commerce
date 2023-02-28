import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import  Typography  from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Carousel from 'react-spring-3d-carousel'
import clsx from 'clsx'
import { useStaticQuery, graphql } from 'gatsby'
import { makeStyles  } from '@material-ui/core/styles'
import  useMediaQuery  from '@material-ui/core/useMediaQuery'
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
        padding: "30rem 10rem 10rem 10rem",
        [theme.breakpoints.down('md')]: {
            padding: '20rem 5rem 5rem 5rem'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '15rem 1rem 1rem 1rem'
        },
    },
    productName: {
        color: '#fff'
    },
    iconButton: {
        "&:hover": {
            backgroundColor: 'transparent'
        },
        
    },
    carouselImage: {
        height: '25rem',
        width: '20rem',
        backgroundColor: 'transparent',
        borderRadius: 20,
        boxShadow: theme.shadows[0],
        [theme.breakpoints.down('sm')]: {
            height: '20rem',
            width: '15rem',
            
        },
        [theme.breakpoints.down('xs')]: {
            width: '10rem'
        }
        
    },
    carouselContainer: {    
        marginLeft:  '15rem',
        [theme.breakpoints.down('md')]: {
            marginLeft: '0rem',
            height: '25rem'
        },
        [theme.breakpoints.down('sm')]: {
            height: '13rem',
            
        }
        

    },
    space: {
        margin: "0 15rem 10rem 15rem",
        [theme.breakpoints.down('sm')]: {
            margin: "0 7rem 10rem 7rem",
        },
        [theme.breakpoints.down('sx')]: {
            margin: "0 2rem 4rem 2rem",
        },
        [theme.breakpoints.down('sx')]: {
            margin: "0 0rem 1rem 0rem",
        },
       

    },
    explore: {
        textTransform: 'none',
        marginRight: '2rem',
        [theme.breakpoints.down('xs')] : {
            fontSize: '2rem'
        }
    },
    descriptionContainer: {
        textAlign: 'right',
        [theme.breakpoints.down('md')]: {
            textAlign: "center"
        }
    },
    


}))

export default function PromotionalProducts() {
    const classes = useStyles()
    const [selectedSlide, setSelectedSlide] = useState(0)
    
    const matchesMD = useMediaQuery(theme => theme.breakpoints.down('md'))
    

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
            <Grid container direction="row" alignItems='center' justifyContent="center">
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
        justifyContent={matchesMD ? "space-around" : "space-between"}
        alignItems="center" 
        classes={{root: classes.mainContainer}}
        direction={matchesMD ? "column" : "row"}
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
                <img src={explore} alt="go to the product page" className={classes.img}/>
             </Button>
            </Grid>
        </Grid>
    )
}