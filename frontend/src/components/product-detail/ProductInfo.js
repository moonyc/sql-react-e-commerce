import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography  from '@material-ui/core/Typography'
import { makeStyles  } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
   background: {
    backgroundColor: theme.palette.secondary.main,
    height: '45rem',
    width: '35rem'
   },
   center: {
    backgroundColor: theme.palette.primary.main,
    height: '35rem',
    width: '45rem'
   }
}))

export default function ProductInfo({ name, descripption, variants, selectedVariant, setSelectedVariant}) {
    const classes = useStyles()

    return (
        <Grid item container direction='column' sx={6}>
            <Grid item container directio="column" classes={{root: classes.background}}>

            </Grid>
            <Grid item container directio="column" classes={{root: classes.center}}>
                
            </Grid>
        </Grid>
    )
} 