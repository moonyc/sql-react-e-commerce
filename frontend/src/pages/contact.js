import React, { useState } from "react"
import Layout from "../components/ui/layout"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import  TextField  from "@material-ui/core/TextField"
import { InputAdornment } from "@material-ui/core"
import clsx from 'clsx'
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from "@material-ui/core/styles"
import validate from "../components/ui/validate"
import { useMediaQuery } from '@material-ui/core'

import { Link } from 'gatsby'

import address from '../images/address.svg'

import Email from '../images/EmailAdornment.js'
import send from '../images/send.svg'
import nameAdornment from '../images/name-adornment.svg'
import PhoneAdornment from '../images/PhoneAdornment'

const useStyles = makeStyles(theme =>  ({
   mainContainer: {
    height: '35rem',
    backgroundColor: theme.palette.primary.main,
    marginBottom: '10rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '5rem',
      height: '70rem',
    }
   },
   formWrapper: {
    height: '100%',
    [theme.breakpoints.down('md')]: {
      height: '50%',
      marginTop: '-5rem'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
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
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '20rem'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
   },
   titleContainer: {
      marginTop: '-4rem'
   },
   buttonContainer: {
      marginBottom: '-4rem',
      textTransform: 'none',
      borderRadius: 0,
      "&:hover" : {
        backgroundColor: theme.palette.secondary.light
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: '-6.5rem'
      }
   },
   contactText: {
    fontSize: '2.2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8rem'
    }
   },
   
   sendIcon: {
    marginLeft: '1.5rem'
   },
   contactInfo: {
     fontSize: '1.3rem',
     marginLeft: '0.8rem',
     [theme.breakpoints.down('xs')]:{
      fontSize: '1.2rem'
     }
   },
   contactIcon: {
    width: '2rem',
    
   },
   infoContainer: {
    height: '15.35rem',
    [theme.breakpoints.down('xs')]: {
      height: '9.3rem'
    }
   },
   middleInfo: {
    borderTop: '2px solid #fff',
    borderBottom: '2px solid #fff',
    
   },
   iconContainer: {
    borderRight: '2px solid #fff',
    height: '5rem',
    width: '6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width:"4rem",
      height: "3rem"
    }

   },
   textField: {
    width: '20rem',
    [theme.breakpoints.down('sm')]: {
      width: '17rem'
    }
   }, 
   input: {
    color: '#fff'
   },
   fieldContainer: {
    marginBottom: '1rem'
   },
   multilineContainer: {
    marginTop: '1rem'
   },
   emailAdornment: {
      width: 22,
      height: 17,
   },
   PhoneAdornment: {
    width: 25.173,
    height: 25.122
   },
   multiline: {
    border: "2px solid #fff",
    borderRadius: 5,
    padding: '1rem'
   },
   multilineError: {
     border: `2px solid ${theme.palette.error.main}`
   },
   buttonDisabled: {
    backgroundColor: theme.palette.secondary.light,
    border: `2px solid ${theme.palette.secondary.main}`
   },
   "@global": {
     ".MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: '2px solid #fff'
     },
     ".MuiInput-underline:after": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`
     },
     
   }
}))

const ContactPage = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down('md'))
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs'))

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")

  const [errors, setErrors] = useState({})

  return (
    <Layout>
      <Grid 
      container 
      direction={matchesMD ? "column" : "row"}
      justifyContent="space-around" 
      alignItems="center" 
      classes={{root: classes.mainContainer}}>
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
            <Grid item>
              <Grid container direction="column">
                <Grid item classes={{root: classes.fieldContainer}}>
                  <TextField 
                  value={name}
                  onChange={event => {
                    if (errors.name) {
                      const valid = validate({name: event.target.value})
                      setErrors({...errors, name: !valid.name })
                    }
                    setName(event.target.value)}}
                  onBlur={event => {
                    const valid = validate({name: name})
                    setErrors({...errors, name: !valid.name })
                  }}
                  error={errors.name}
                  helperText={errors.name ? "you must enter a name" : null}
                  placeholder="Name" 
                  classes={{root: classes.textField}}
                  InputProps={{classes: {input: classes.input}, startAdornment: (
                    <InputAdornment position="start">
                         <img src={nameAdornment} alt="name"/>
                    </InputAdornment>
                  )}}
                  />
                </Grid>
                <Grid item classes={{root: classes.fieldContainer}}>
                  <TextField 
                  value={email}
                  onChange={(event) => {
                    if (errors.email) {
                      const valid = validate({email: event.target.value})
                      setErrors({...errors, email: !valid.email })
                    }
                    setEmail(event.target.value)}}
                  onBlur={event => {
                    const valid = validate({email: email})
                    setErrors({...errors, email: !valid.email })
                  }}
                  error={errors.email}
                  helperText={errors.email ? "you must enter a name" : null}
                  placeholder="Email" 
                  classes={{root: classes.textField}}
                  InputProps={{classes: {input: classes.input}, startAdornment: (
                    <InputAdornment position="start">
                        <div className={classes.emailAdornment}>
                        <Email color={theme.palette.secondary.main}/>
                        </div>
                    </InputAdornment>
                  )}}
                  />
                </Grid>
                <Grid item classes={{root: classes.fieldContainer}}>
                  <TextField 
                  value={phoneNumber}
                  onChange={(event) => {
                    if (errors.phoneNumber) {
                      const valid = validate({phoneNumber: event.target.value})
                      setErrors({...errors, phoneNumber: !valid.phoneNumber })
                    }
                    setPhoneNumber(event.target.value)}}
                  onBlur={event => {
                    const valid = validate({phoneNumber: phoneNumber})
                    setErrors({...errors, phoneNumber: !valid.phoneNumber })
                  }}
                  error={errors.phoneNumber}
                  helperText={errors.phoneNumber ? "you must enter a name" : null}
                  placeholder="Phone Number" 
                  classes={{root: classes.textField}}
                  InputProps={{classes: {input: classes.input}, startAdornment: (
                    <InputAdornment position="start">
                         <div className={classes.PhoneAdornment}>
                           <PhoneAdornment color={theme.palette.secondary.main}/>
                          </div>
                    </InputAdornment>
                  )}}
                  />
                </Grid>
                <Grid item classes={{root: classes.multilineContainer}}>
                  <TextField 
                  value={message}
                  onChange={(event) => {
                    if (errors.message) {
                      const valid = validate({message: event.target.value})
                      setErrors({...errors, message: !valid.message })
                    }
                    setMessage(event.target.value)}}
                  onBlur={event => {
                    const valid = validate({message: message})
                    setErrors({...errors, message: !valid.message })
                  }}
                  error={errors.message}
                  helperText={errors.message ? "you must enter a name" : null}
                  placeholder="Message"  
                  multiline
                  rows={8}
                  classes={{root: classes.textField}}
                  InputProps={{ disableUnderline: true, classes: { input: classes.input, multiline: classes.multiline, error: classes.multilineError}}}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid 
            item 
            component={Button}
            disabled={Object.keys(errors).some(error=> errors[error] === true) || Object.keys(errors).length !== 4}
            classes={{root: clsx(classes.buttonContainer, classes.blockContainer, {
              [classes.buttonDisabled]: Object.keys(errors).some(error=> errors[error] === true) || Object.keys(errors).length !== 4
            })}}>
                <Typography variant="h4" classes={{root: classes.contactText}}>
                  Send message
                </Typography>
                <img src={send} className={classes.sendIcon} alt="send message"/>
            </Grid>
           </Grid>
          </Grid>
      {/* { Contact info} */}
          <Grid item>
             <Grid container direction="column" classes={{root: classes.infoContainer}} justifyContent="space-between">
                <Grid item container alignItems="center">
                   <Grid item classes={{root: classes.iconContainer}}>
                      <img src={address} alt="address" className={classes.contactIcon}/>
                   </Grid>
                   <Grid item>
                    <Typography variant="h2" classes={{root: classes.contactInfo}}>
                      1234 S Example St {matchesXS ? <br /> : null}Wichita, KS 67111
                    </Typography>
                   </Grid>
                </Grid>
                <Grid item container alignItems="center" classes={{root: classes.middleInfo}}>
                   <Grid item  classes={{root: classes.iconContainer}}>
                      <div className={classes.contactIcon}>
                      <PhoneAdornment />
                      </div>
                      
                   </Grid>
                   <Grid item>
                     <Typography variant="h2" classes={{root: classes.contactInfo}}> 
                      (+39)3456127252
                     </Typography>
                   </Grid>
                </Grid>
                <Grid item container alignItems="center">
                  <Grid item  classes={{root: classes.iconContainer}}>
                    <div className={classes.contactIcon}>
                     <Email color="#fff"/>
                    </div>
                  </Grid>
                  <Grid item >
                    <Typography variant="h2" classes={{root: classes.contactInfo}}>
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
