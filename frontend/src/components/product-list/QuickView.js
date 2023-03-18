import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography  from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '../home/Rating'
import Sizes from './Sizes'
import Swatches from './Swatches'

import frame from '../../images/frame.svg'
import explore from '../../images/explore.svg'
import QtyButton from './QtyButton'

const useStyles = makeStyles(theme => ({
   selectedFrame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '60.4rem',
    width: '73.5rem',
    padding: '0 !important'
  },
  dialog: {
    maxWidth: '100%'
  },
  productImage: {
    height: '39rem',
    marginTop: '5rem'
  },
  toolbar: {
    backgroundColor: theme.palette.primary.main,
    height: '12.7rem',
    padding: '0.5rem 1rem'
    
  },
  infoContainer: {
    height: '100%',
    
  },
  stock: {
    color: '#fff'
  },
  detailButton: {
    padding: 0
  },
  details: {
    color: '#fff',
    textTransform: 'none',
    fontSize: '1.5rem'
  },
  exploreIcon: {
    height: '1.5rem',
    marginLeft: '0.5rem'
  },
  chipContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  chipRoot: {
    transform: "scale(1.5)"
  },
  quantityContainer: {
    marginTop: '2rem'
  }
}))

export default function QuickView( {
  open, 
  setOpen, 
  url, 
  name, 
  price, 
  product,
  sizes,
  colors,
  selectedSize,
  selectedColor,
  setSelectedColor,
  setSelectedSize

}) {
    const classes = useStyles()
   
    

    return(
     <Dialog classes={{ paper: classes.dialog }}open={open} onClose={() => setOpen(false)}>
        <DialogContent classes={{root: classes.selectedFrame}}> 
           <Grid container direction='column' alignItems="center">
            <Grid item>
                <img src={url} alt="product" className={classes.productImage}/>
            </Grid>
            <Grid item container justifyContent="space-between" classes={{root: classes.toolbar}}>
               <Grid item>
                <Grid container direction="column" justifyContent="space-between" classes={{root: classes.infoContainer}}>
                   <Grid item>
                     <Typography variant="h4">
                       {name}
                     </Typography>
                     <Rating number={4} />
                   </Grid>
                   <Grid item>
                     <Typography variant="h3" classes={{root: classes.stock}}>
                       12 Currently In Stock
                     </Typography>
                     <Button classes={{root: classes.detailButton}}>
                         <Typography variant="h3" classes={{root: classes.details}}>
                             Details
                         </Typography>
                         <img src={explore} alt="explore" className={classes.exploreIcon}/>
                     </Button>
                   </Grid>
                </Grid>
               </Grid>
               <Grid item classes={{root: classes.chipContainer}}>
                  <Chip label={`$${price}`} classes={{root: classes.chipRoot}}/>
               </Grid>
               <Grid item>
                 <Grid container direction="column">
                   
                    <Sizes sizes={sizes}  selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                    <Swatches colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
                    <span className={classes.quantityContainer}>
                    <QtyButton />
                    </span>
                 </Grid>
               </Grid>
            </Grid>
           </Grid>
        </DialogContent>
     </Dialog>
    )
} 