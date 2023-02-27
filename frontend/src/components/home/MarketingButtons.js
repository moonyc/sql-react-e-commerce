import React, {useState, useEffect} from 'react'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'

import featuredAdornment from '../../images/featured-adornment-2.svg'
import store from '../../images/store.svg'
import darkStore from '../../images/dark-store.svg'
import moreByUs from '../../images/more-by-us.svg'


const useStyles = makeStyles(theme => ({
   button: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '25rem',
    width: '25rem',
    transition: 'transform 0.5s ease',
    "&:hover" : {
      transform: 'scale(1.1)'
    }

   },
   text: {
    color: theme.palette.primary.main,
   },
   textW: {
    color: "#fff"
   },
   image: {
    height: '11.25rem'
   },
   container: {
    margin: '0rem 0',
    backgroundImage: `url(${featuredAdornment})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '60rem',
    
   }
}))

export default function MarketingButtons() {
    const classes = useStyles()
    const [trigger, checkWidth] = useState(false)
    

    useEffect(() => {
   
      window.addEventListener('resize', ( ) => {
         if (window.innerWidth < 820) {
          checkWidth(true)
          
         } else {
          checkWidth(false)
          
         }
      })
      
      
    })

    const buttons = [
        {label:'Store',icon:store, dIcon: darkStore, link:'/hoodies', textColor:"white"},
        {label:"More by us", icon:moreByUs, dIcon:moreByUs,  href: 'https://www.google.com', textColor:"black" }
    ]

    return(
      <Grid container justifyContent="space-between" alignItems="center" classes={{root: classes.container}}>
        {buttons.map((button) => (
            <Grid item >
              <Grid 
              container 
              alignItems="center" 
              justifyContent="center" 
              direction="column" 
              classes={{root: classes.button}}
              component={button.link ? Link : 'a'}
              to={button.link ? button.link : undefined}
              href={button.href ? button.href : undefined}
              >
                 <Grid item>
                  <img src={trigger === false ? button.icon : button.dIcon} 
                  alt={button.label} 
                  className={classes.image}/>
                </Grid>
                <Grid item>
                  <Typography variant="h1" classes={{root: clsx(classes.text, {
                    [classes.textW]: button.textColor === 'white' && trigger === false 
  
                  })}}>
                    {button.label}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
        ))}
      </Grid>
    )
}