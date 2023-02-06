import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Lottie from 'react-lottie'

import animationData from '../../images/data.json'

export default function HeroBlock() {
    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData
    }

    return (
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item>
             <Grid container direction="column">
                <Grid item>
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
             <Lottie isStopped options={defaultOptions} width="40rem"/>
           </Grid>
        </Grid>
    )
}