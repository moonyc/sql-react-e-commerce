import * as React from "react"
import Layout from "../components/ui/layout"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core/styles"
import { Link } from 'gatsby'

import address from '../images/address.svg'
import phone from '../images/phone-adornment.svg'
import email from '../images/email-adornment.svg'
import send from '../images/send.svg'

const useStyles = makeStyles(theme =>  ({
   mainContainer: {
    height: '30rem',
    backgroundColor: theme.palette.primary.main,
    marginBottom: '10rem'
   },
   formWrapper: {
    height: '100%'
   },
   formContainer: {
    height: '100%'
   },
   blockContainer: {
    backgroundColor: theme.palette.secondary.main,
    height: '6rem',
    width: '26rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
   },
   titleContainer: {
      marginTop: '-4rem'
   },
   buttonContainer: {
      marginBottom: '-4rem'
   },
   contactText: {
    fontSize: '2.5rem'
   },
   sendButton: {
    textTransform: 'none'
   },
   sendIcon: {
    marginLeft: '1.5rem'
   }
}))

const ContactPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Grid container justifyContent="space-around" alignItems="center" classes={{root: classes.mainContainer}}>
     {/* { Contact form} */}
          <Grid item classes={{root: classes.formWrapper}}>
            <Grid 
            container 
            direction="column" 
            justifyContent="space-between" 
            classes={{root: classes.formContainer}}
            alignItems="center"> 
            <Grid item classes={{root: clsx(classes.titleContainer, classes.blockContainer)}}>
            <Typography variant="h4" classes={{root: classes.contactText}}>
                Contact us
             </Typography>
            </Grid>
            <Grid item classes={{root: clsx(classes.buttonContainer, classes.blockContainer)}}>
              <Button classes={{root: classes.sendButton}}>
                <Typography variant="h4" classes={{root: classes.contactText}}>
                  Send a message
                </Typography>
                <img src={send} className={classes.sendIcon} alt="send message"/>
              </Button>
            </Grid>
           </Grid>
          </Grid>
      {/* { Contact info} */}
          <Grid item>
             <Grid container direction="column">
                <Grid item container>
                   <Grid item>
                      <img src={address} alt="address"/>
                   </Grid>
                   <Grid item>
                    <Typography variant="h2" classes={{root: classes}}>
                      1234 S Example St Wichita, KS 67111
                    </Typography>
                   </Grid>
                </Grid>
                <Grid item container>
                   <Grid item>
                     <img src={phone} alt="phone"/>
                   </Grid>
                   <Grid item>
                     <Typography variant="h2">
                      (+39)3456127252
                     </Typography>
                   </Grid>
                </Grid>
                <Grid item container>
                  <Grid item>
                  <img src={email} alt="email"/>
                  </Grid>
                  <Grid item>
                    <Typography variant="h2">
                      info@sashacorp.dev
                    </Typography>
                  </Grid>
                </Grid>
             </Grid>
          </Grid>
      </Grid>
    </Layout>
  )
}

export default ContactPage

export const Head = () => <title>Home Page</title>
