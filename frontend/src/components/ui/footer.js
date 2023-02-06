import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'


import instagram from '../../images/instagram.svg'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'

const useStyles = makeStyles(theme =>({
  footer: {
   backgroundColor: theme.palette.primary.main,
   padding: "2rem",
  },  
  linkColumn: {
   width: "20rem",
  },
  link: {
    color: "#fff",
    fontSize: "1rem"
  },
  linkContainer : {
     [theme.breakpoints.down('md')]: {
      marginBottom: '3rem'
     }  
  },
  "@global" : {
     body: {
        margin: 0,
     },
     a: {
      textDecoration: "none",
     }
  }
}))

export default function Footer() {
    const classes = useStyles()

    const socialMedia = [
      {icon: facebook, alt:'facebool', link:'https://facebook.com'},
      {icon: twitter, alt:'twitter', link:'https://twitter.com'},
      {icon: instagram, alt:'instagram', link:'https://instagram.com'}
   ]

   const routes = {
      "Contact Us": [{label: "(333) 333-3333", href: 'tel:(333) 333-3333'}, {label: "sasha@sashacorp.dev", href:"mailto:sasha@sashacorp.dev"}],
      "Customer Service": [{label: 'Contact Us', link:'/contact'}, {label: 'My Account', link:'/account'}],
      "Information": [{label: 'Privacy Policy', link:'/privacy-policy'}, {label: 'Terms and Conditions', link:'/terms-conditions'}]
   }

    return(
        <footer className={classes.footer}>
            <Grid container justifyContent="space-between">
            {/* Links */}
            <Grid item classes={{ root: classes.linkContainer}}>
            <Grid container>
             {
               Object.keys(routes).map(category => (
                  <Grid 
                  item 
                  container
                  key={category}
                  direction="column" 
                  classes={{root: classes.linkColumn}}>
                   <Grid item>
                     <Typography variant="h5">{category}</Typography>
                  </Grid>
                   {routes[category].map(route => (
                      <Grid item key={route.label}>
                         <Typography 
                         component={route.link ? Link : "a"} 
                         to={route.link ? route.link : undefined} 
                         href={route.href ? route.href : undefined} 
                         variant="body1" classes={{body1: classes.link}}
                         >
                         {route.label}
                         </Typography>
                     </Grid>
                  ))}
                 </Grid>
               ))
             }
            </Grid> 

         </Grid>

            {/* Social media Icons */}
            <Grid item >

               <Grid container direction="column" alignItems="center">
                  {socialMedia.map(platform => (
                     <Grid item key={platform.alt}>
                     <IconButton component='a' href={platform.link} target='_blank'> 
                        <img src={platform.icon} alt={platform.alt}/>
                     </IconButton>
                  </Grid>
                  ))}
               </Grid>

            </Grid>
         </Grid>
            
        </footer>
    )
}