import React, { useState } from 'react'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import Typography  from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { ButtonGroup } from '@material-ui/core'
import Badge from '@material-ui/core/Badge'
import { makeStyles  } from '@material-ui/core/styles'

import cart from '../../images/cartWhite.svg'

const useStyles = makeStyles(theme => ({
   mainGroup: {
     height: '3rem',
     marginTop: '2rem'
   },
   qtyText: {
    color: '#fff'
   },
   cartIcon: {
    height: '2.5rem',
   },
   editButton: {
    height: '1.525rem',
    borderRadius: 0,
    backgroundColor: theme.palette.secondary.main,
    borderLeft: '2px solid #fff',
    borderRight: '2px solid #fff',
    borderBottom: 'none',
    borderTop: 'none'
   },
   endButton: {
    borderRadius: 50,
    backgroundColor: theme.palette.secondary.main,
    border: 'none'
   },
   cartButton: {
    marginLeft: '0 !important'
   },
   minusButton: {
    borderTop: '2px solid #fff'
   },
   minus: {
    marginTop: '-0.25rem'
   },
   qtyButton: {
    "&:hover": {
        backgroundColor: theme.palette.secondary.main
    }
   },
   badge: {
    color: '#fff',
    fontSize: '1.5rem',
    backgroundColor: theme.palette.secondary.main,
    padding: 0
   }
}))

export default function QtyButton() {
    const classes = useStyles()
    const [quantity, setQuantity] = useState(1)
    return (
        <Grid item>
            <ButtonGroup classes={{root: classes.mainGroup}}>
                <Button classes={{root: clsx(classes.endButton, classes.qtyButton)}}>
                    <Typography variant="h3" classes={{root: classes.qtyText}}>
                        {quantity}
                    </Typography>
                </Button>
                 <ButtonGroup orientation="vertical">
                    <Button onClick={() => setQuantity(quantity + 1)} classes={{root: classes.editButton}}>
                    <Typography variant="h3" classes={{root: classes.qtyText}}>
                       +
                    </Typography>
                    </Button>
                    <Button  onClick={() =>quantity > 0 ? setQuantity(quantity - 1) : null} classes={{root: clsx(classes.editButton, classes.minusButton)}}>
                    <Typography variant="h3" classes={{root: clsx(classes.qtyText, classes.minus)}}>
                       -
                    </Typography>
                    </Button>
                 </ButtonGroup>
                 <Button classes={{root: clsx(classes.endButton, classes.cartButton)}}>
                    <Badge overlap="circle" badgeContent="+" classes={{badge: classes.badge}}>
                      <img src={cart} alt="cart" className={classes.cartIcon}/>
                    </Badge>
                    
                 </Button>
            </ButtonGroup>
        </Grid>
    )
} 