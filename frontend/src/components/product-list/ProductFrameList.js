import React from 'react'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Typography  from '@material-ui/core/Typography'
import Chip  from '@material-ui/core/Chip'
import { makeStyles  } from '@material-ui/core/styles'

import Rating from '../home/Rating'
import Sizes from './Sizes'
import Swatches from './Swatches'
import QtyButton from './QtyButton'

import { colorIndex } from './ProductFrameGrid'

const useStyles = makeStyles(theme => ({
  frame: {
    backgroundColor: theme.palette.common.framePurple,
    height: '28rem'
  },
  info: {
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    width: '100%',
    padding: '1rem',
    [theme.breakpoints.down('md')]:
    {
      height: '50%'
    },
    [theme.breakpoints.down('sm')]:
    {
      height:'26rem'
    }
  },
  productImage: {
    width: '20rem'
  },
  stock: {
    color: '#fff'
  },
  sizesAndSwatches: {
    maxWidth: '13rem'
  },
  chipLabel: {
    fontSize: '2rem',
    "&:hover": 
    {
      cursor: 'pointer'
    }
  }
}))

export default function ProductFrameList({ 
    product, 
    variant, 
    selectedSize,
    selectedColor,
    setSelectedSize,
    setSelectedColor,
    sizes,
    colors
}) {
    const classes = useStyles()

    const imageIndex = colorIndex(product, variant, selectedColor)

    const images = imageIndex !== -1 ? product.node.variants[imageIndex].images 
    : variant.images

    console.log( )
    return (
        <Grid item container>
            <Grid item lg={9} container classes={{root: classes.frame}} alignItems="center" justifyContent="space-around">
                {images.slice(0, 4).map(image => (
                    <>
                    <Grid item 
                         key={image.url} 
                         component={Link} 
                         to={`/${product.node.category.name.toLowerCase()}/${product.node.name.split(" ")[0].toLowerCase()}`}>
                       <img  className={classes.productImage} src={process.env.GATSBY_STRAPI_URL + image.url} alt={image.url}/>
                    </Grid>
                    
                    </>
                    
                ))}
            </Grid>
            <Grid item lg={3} container direction="column" justifyContent="space-between" classes={{root: classes.info}}>
                <Grid item container direction="column" 
                  component={Link} 
                  to={`/${product.node.category.name.toLowerCase()}/${product.node.name.split(" ")[0].toLowerCase()}`}
                >
                <Grid item>
                     <Typography variant="h4">
                        {product.node.name.split(" ")[0]}
                     </Typography>
                   </Grid>
                   <Grid item>
                      <Rating number={3.5}/>
                   </Grid>
                   <Grid item>
                      <Chip label={`$${variant.price}`} classes={{label: classes.chipLabel}}/>
                   </Grid>
                   <Grid item>
                      <Typography variant="h3" classes={{root: classes.stock}}>
                        12 Current In Stock
                      </Typography>
                   </Grid>
                </Grid>
                <Grid item container direction="column" classes={{root: classes.sizesAndSwatches}}>
                  <Sizes sizes={sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
                   <Swatches colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
                </Grid>
                <QtyButton />
            </Grid>
        </Grid>
    )
} 