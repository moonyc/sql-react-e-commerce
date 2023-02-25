import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'

import marketingAdornment from '../../images/marketing-adornment.svg'


const useStyles = makeStyles(theme => ({
   button: {
    backgroundImage: `url(${marketingAdornment})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '25rem',
    width: '25rem'
   },
   text: {
    color: '#50577A',
    colorSize: '5.5rem',
    fontWeight: 900
   }
}))

export default function MarketingButtons() {
    const classes = useStyles()
    const buttons = [
        {label:'Store', // icon:store, 
        link:'/hoodies'},
        {label:"More by us", //icon:moreByUs, 
        href: 'https://www.google.com'}
    ]

    return(
      <Grid container justifyContent="space-around">
        {buttons.map(button => (
            <Grid item >
              <Grid container alignItems="center" justifyContent="center" direction="column" classes={{root: classes.button}}>
                {/* {<Grid item>
                  <img src={button.icon} alt={button.label}/>
                </Grid>} */}
                <Grid item>
                  <Typography variant="h1" classes={{root: classes.text}}>
                    {button.label}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
        ))}
      </Grid>
    )
}