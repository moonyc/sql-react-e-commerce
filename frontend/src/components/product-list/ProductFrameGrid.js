import React, { useState} from 'react'
import Grid from '@material-ui/core/Grid'
import  Typography  from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import QuickView from './QuickView'
import frame from '../../images/frame.svg'

const useStyles = makeStyles(theme => ({
   frame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: 'center',
    backgroundSize: "contain",
    backgroundRepeat: 'no-repeat',
    height: '25rem',
    width: '25rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
   },
   product: {
    width: '20rem'
   },
   title: {
    backgroundColor: theme.palette.primary.main,
    height: '5rem',
    width: '24.48rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'calc((100% -(25rem * 4)) / 3)',
    ":nth-child(4n)": {
        marginRight: 0
    },
    frameContainer: {
        "&:hover": {
            cursor: 'pointer'
        }
    }
   }
}))

export const colorIndex = (product, variant, color) => {

    return product.node.variants.indexOf(
        product.node.variants.filter(item => 
        item.color === color && variant.style === item.style)[0])

}

export default function ProductFrameGrid({ 
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
    const [open, setOpen] = useState(false)

   const imageIndex = colorIndex(product, variant, selectedColor)
    
    const imgURL = process.env.GATSBY_STRAPI_URL + (imageIndex !== -1 ? 
        product.node.variants[imageIndex].images[0].url :
        variant.images[0].url)

    const productName = product.node.name.split(" ")[0]
    return (
       <Grid item classes={{root: classes.frameContainer }}>
           <Grid container direction="column" alignItems="center" onClick={() => setOpen(true)}>
               <Grid item classes={{root: classes.frame}}>
                <img src={imgURL}
                    alt={product.node.name}
                    className={classes.product} />
               </Grid>
               <Grid item classes={{root: classes.title}}>
                  <Typography variant="h5" >
                    {productName}
                  </Typography>
               </Grid>
           </Grid>
           <QuickView 
           open={open} 
           setOpen={setOpen} 
           url={imgURL} 
           name={productName}
           price={variant.price} 
           product={product}
           sizes={sizes} 
           colors={colors} 
           selectedColor={selectedColor}
           selectedSize={selectedSize} 
           setSelectedSize={setSelectedSize}
           setSelectedColor={setSelectedColor}
           />
       </Grid>
    )
}