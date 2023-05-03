import React from 'react'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import { IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery'

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
    },
    [theme.breakpoints.down('sm')]: {
      width: '12rem'
    }

   },
   text: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      fontSize: '3.5rem'
    },
    [theme.breakpoints.down('sm')]:{
      fontSize: '2.5rem'
    }
   },
   textW: {
    color: "#fff"
   },
   image: {
    height: '14.25rem',
    [theme.breakpoints.down('md')]: {
      height: '13.25rem'
    },
    [theme.breakpoints.down('sm')]:
    {
      height: '9.25rem'
    }
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
   const matchesMD = useMediaQuery(theme => theme.breakpoints.down('md'))
   const matchesSM = useMediaQuery(theme => theme.breakpoints.down('sm'))
 
    const buttons = [
        {label:'Store',icon:store, dIcon: darkStore, link:'/hoodies', textColor:"white"},
        {label:"More by us", icon:moreByUs, dIcon:moreByUs,  href: 'https://www.google.com', textColor:"black" }
    ]

    return(
      <Grid container direction={matchesMD ? 'column' : 'row'} justifyContent={matchesMD ? 'center' : 'space-between'} alignItems="center" classes={{root: classes.container}}>
        {buttons.map((button) => (
            <Grid item >
              <Grid 
              key={button.label.toLowerCase()}
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
                 <IconButton disableRipple disableFocusRipple disableTouchRipple>
                  <img src={matchesMD ? button.dIcon : button.icon} 
                  alt={button.label} 
                  className={classes.image}/>
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant="h1" classes={{root: clsx(classes.text, {
                    [classes.textW]: !matchesSM && button.textColor === 'white' 
  
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