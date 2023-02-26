import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'

import cta from '../../images/cta.svg'

const useStyles = makeStyles(theme => ({
    image: {
        width: '18rem'
    },
    account: {
        color: '#fff',
        marginLeft: '2rem'
    },
    body: {
        maxWidth: '40rem'
    },
    container: {
        marginBottom: '15rem'
    },
    buttonContainer: {
        marginTop: '3rem',
    }
    

}))

export default function CallToAction() {
    const classes = useStyles()

    return(
        <Grid container justifyContent='space-around' alignItems="center"  classes={{root: classes.container}}>
            {/** Left side: image */}
            <Grid item>
                <img src={cta} alt="quality committed" className={classes.image}/>
            </Grid>
            {/**Right side: text */}
            <Grid item>
                <Grid container direction="column" classes={{root:classes.text}}>
                    <Grid item>
                    <Typography variant="h1">
                        Committed To Quality 
                    </Typography>
                    </Grid>
                    <Grid item classes={{root: classes.body}}>
                        <Typography variant="body1">
                            At Sashacorp our mission is to provide funny and durable clothes and accessories, while 
                            expressing the most loyal and enthusiastic love for Sasha the cat.
                        </Typography>
                    </Grid>
                    <Grid item container classes={{root: classes.buttonContainer}}>
                        <Grid item>
                            <Button component={Link}  to="/contact" variant="outlined" color="primary">
                                Contact Us
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button component={Link} to="/account" variant="contained" color="primary" classes={{root: classes.account}}>
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
              
                     
            
        </Grid>
    )
}