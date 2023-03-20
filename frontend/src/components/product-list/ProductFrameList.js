import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography  from '@material-ui/core/Typography'
import Chip  from '@material-ui/core/Chip'
import { makeStyles  } from '@material-ui/core/styles'

import Rating from '../home/Rating'
import Sizes from './Sizes'
import Swatches from './Swatches'
import QtyButton from './QtyButton'

const useStyles = makeStyles(theme => ({
  frame: {
    backgroundColor: theme.palette.common.framePurple,
    height: '28rem'
  },
  info: {
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    width: '100%',
    padding: '1rem'
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
    fontSize: '2rem'
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

    

    return (
        <Grid item container>
            <Grid item xs={9} container classes={{root: classes.frame}} alignItems="center" justifyContent="space-around">
                {variant.images.slice(0, 4).map(image => (
                    <>
                    <Grid item key={image.url}>
                       <img  className={classes.productImage} src={process.env.GATSBY_STRAPI_URL + image.url} alt={image.url}/>
                    </Grid>
                    
                    </>
                    
                ))}
            </Grid>
            <Grid item xs={3} container direction="column" justifyContent="space-between" classes={{root: classes.info}}>
                <Grid item container direction="column">
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