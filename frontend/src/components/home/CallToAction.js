import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import  useMediaQuery  from '@material-ui/core/useMediaQuery'

import cta from '../../images/cta.svg'

const useStyles = makeStyles(theme => ({
    image: {
        width: '18rem',
        [theme.breakpoints.down('md')]: {
            width: '12rem'
        }
       
    },
    account: {
        color: '#fff',
        marginLeft: '2rem'
    },
    body: {
        maxWidth: '40rem',
        [theme.breakpoints.down('md')]: {
            maxWidth: '30rem',
            padding: '0, 1rem'
        },
        [theme.breakpoints.down('sm')]:{
            maxWidth: '25rem'
        },
        [theme.breakpoints.down('xs')]:{
            maxWidth: '20rem'
        }
    },
    container: {
        marginBottom: '15rem',
        [theme.breakpoints.down('md')]:{
            marginBottom: '3rem'
        }
    },
    buttonContainer: {
        marginTop: '3rem',
    },
    title: {
        [theme.breakpoints.down('md')]: {
        fontSize: '3rem'
        
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: '2rem'
        }
    }
    

}))

export default function CallToAction() {
    const classes = useStyles()
    const matchesSM = useMediaQuery(theme => theme.breakpoints.down('sm'))
    

    return(
        <Grid container justifyContent='space-around' alignItems="center"  classes={{root: classes.container}}>
            {/** Left side: image */}
            <Grid item>
                <img src={cta} alt="quality committed" className={classes.image}/>
            </Grid>
            {/**Right side: text */}
            <Grid item>
                <Grid container direction="column" alignItems="center" classes={{root:classes.text}}>
                    <Grid item>
                    <Typography variant="h1" classes={{root: classes.title}}>
                        Committed To Quality 
                    </Typography>
                    </Grid>
                    <Grid item classes={{root: classes.body}}>
                        <Typography variant="body1" classes={{root: classes.bodyText}}>
                            At Sashacorp our mission is to provide funny and durable clothes and accessories, while 
                            expressing the most loyal and enthusiastic love for Sasha the cat.
                        </Typography>
                    </Grid>
                    <Grid item container  justifyContent={matchesSM ? 'center' : undefined} alignItems="center" classes={{root: classes.buttonContainer}}>
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