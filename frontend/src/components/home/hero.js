import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Lottie from 'react-lottie'
import { useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import animationData from '../../images/sashacorp.json'

const useStyles = makeStyles(theme => ({
    textContainer: {
        padding: "2rem"
    }
}))

export default function HeroBlock() {
    const matchesLG = useMediaQuery(theme => theme.breakpoints.down('lg'))
    const matchesMD = useMediaQuery(theme => theme.breakpoints.down('md'))
    const matchesSM = useMediaQuery(theme => theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs'))

    const classes = useStyles()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData
    }

    return (
        <Grid container justifyContent="space-around" alignItems="center" >
          <Grid item classes={{root: classes.textContainer}}>
             <Grid container direction="column">
                <Grid item >
                    <Typography variant="h1">
                        The First
                        <br/>
                        Sasha's Clothing Line
                    </Typography>
                </Grid>
                 <Grid 
                 item>
                    <Typography
                     variant="h3"
                    >
                     High quality, custom designed shirts, 
                     <br/>
                     hats and hoodies
                    </Typography>
                 </Grid>
             </Grid>
          </Grid>
           <Grid item>
             <Lottie   
             options={defaultOptions} 
             width={matchesXS ? "20rem" : matchesSM ? "25rem" : matchesMD ? "30rem" : matchesLG ? "35rem" : "40rem" }

             />
           </Grid>
        </Grid>
    )
}