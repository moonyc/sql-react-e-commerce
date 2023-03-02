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

  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: ""
  })
  const [errors, setErrors] = useState({})

  const fields = {
    name: {
      helperText: 'you must enter a name',
      placeholder: 'Name',
      adornment:  <img src={nameAdornment} alt="name"/>
    },
    email: {
      helperText: 'invalid email',
      placeholder: 'Email',
      adornment: (<div className={classes.emailAdornment}>
        <Email color={theme.palette.secondary.main}/>
        </div>)
    },
    phoneNumber: {
      helperText: 'invalid phone number',
      placeholder: 'Phone Number',
      adornment: (<div className={classes.PhoneAdornment}>
        <PhoneAdornment color={theme.palette.secondary.main}/>
       </div>)
    },
    message: {
      helperText: 'you must enter a message',
      placeholder: 'Message',
      inputClasses: {
        multiline: classes.multiline, 
        error: classes.multilineError
      }
    }
  }

  const info = [{
    label: <span>1234 S Example St {matchesXS ? <br /> : null}Wichita, KS 67111 </span>,
     icon: (<img src={address} alt="address" className={classes.contactIcon}/>),
  },
   {
    label: "(+39)3456127252",
    icon: (<div className={classes.contactIcon}>
      <PhoneAdornment />
      </div>),
   },
   {
    label: "info@sashacorp.dev",
    icon: (<div className={classes.contactIcon}>
      <Email color="#fff"/>
     </div>)
   }
    
]
  const disabled = Object.keys(errors).some(error=> errors[error] === true) || Object.keys(errors).length !== 4
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
              {Object.keys(fields).map(field => {
                const validateHelper = (event) => {
                  const valid = validate({[field]: event.target.value})
                  setErrors({...errors, [field]: !valid[field] })
                }
              return (
                <Grid item classes={{root: field === "message" ? classes.multilineContainer : classes.fieldContainer}}>
                  <TextField 
                  value={values[field]}
                  onChange={event => {
                    if (errors[field]) {
                      validateHelper(event)
                    }
                    setValues({...values, [field]: event.target.value})
                    }}
                  onBlur={event => {
                    validateHelper(event)
                  }}
                  error={errors[field]}
                  helperText={errors[field] ? fields[field].helperText : null}
                  placeholder={fields[field].placeholder}
                  classes={{root: classes.textField}}
                  multiline={field === "message"}
                  rows={field === "message" ? 8 : undefined}
                  InputProps={{classes: {input: classes.input, ...fields[field].inputClasses},
                   disableUnderline: field === "message",
                   startAdornment: (
                    <InputAdornment position="start">
                        {fields[field].adornment}
                    </InputAdornment>
                  )}}
                  />
                </Grid>
               )
               })}
              </Grid>
            </Grid>
            <Grid 
            item 
            component={Button}
            disabled={disabled}
            classes={{root: clsx(classes.buttonContainer, classes.blockContainer, {
              [classes.buttonDisabled]: disabled
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
                {info.map((section, index) => (
                  <Grid item 
                  container 
                  alignItems="center" 
                  classes={{root: index === 1 ? classes.middleInfo : undefined}}>
                   <Grid item  classes={{root: classes.iconContainer}}>
                      {section.icon}
                   </Grid>
                   <Grid item>
                     <Typography variant="h2" classes={{root: classes.contactInfo}}> 
                      {section.label}
                     </Typography>
                   </Grid>
                </Grid>
                ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ContactPage

export const Head = () => <title>Home Page</title>
