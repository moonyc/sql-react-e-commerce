import React from 'react'
import clsx from 'clsx'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import background from '../../images/background-1.svg'
import ListIcon from '../../images/List'
import GridIcon from '../../images/Grid'

const useStyles = makeStyles(theme => ({
    
   description: {
    color: '#fff'
   },
   mainContainer:  {
    padding: '2rem',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    borderRadius: "0px 0px 10px 10px",
    [theme.breakpoints.down('sm')]:
    {
        padding: '2rem 0rem'
    }

   },

   descriptionContainer: {
    backgroundColor: theme.palette.primary.main,
    height: '15rem',
    width: '60%',
    padding: '1rem',
    borderRadius: 10,
    boxShadow: theme.shadows[1],
    [theme.breakpoints.down('md')]:
    {
        width: '100%'
    },
    [theme.breakpoints.down('sm')]:
    {
        borderRadius: 0
    }

   },
   buttonGroupContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: '2.7rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
        position: 'relative',
        display: 'flex',
        alignSelf: 'flex-end',
        marginRight: 0,
        marginBottom: 0,
        marginTop: '3rem'
    },
    [theme.breakpoints.down('sm')]:
    {
        marginRight: '1.5rem'
    }
},
   button: {
    padding: '0.5rem 1.3rem',
    border: `2px solid  ${theme.palette.secondary.main}`,
    borderRightColor: `${theme.palette.secondary.main} !important`,
    borderRadius: 25,
    backgroundColor: theme.palette.primary.main,

    "&:hover":{
        backgroundColor: theme.palette.secondary.main
    },
    
   },
   selected: {
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRightColor: `${theme.palette.secondary.main} !important`,
    backgroundColor: theme.palette.secondary.main,
    "&:hover":{
        backgroundColor: theme.palette.secondary.main
    },
    
    
   }
}))

export default function DescriptionContainer({
    name, 
    description, 
    layout, 
    setLayout,
    

}) {
    const classes = useStyles()
    const matchesMD = useMediaQuery(theme => theme.breakpoints.down('md'))
    const changeLayout = (option) => {
       
       setLayout(option)
    }
    
   console.log(layout)
    return(
        <Grid item container 
        direction={matchesMD ? 'column' : 'row'}
        classes={{root: classes.mainContainer}} 
        justifyContent="center"
        alignItems={matchesMD? 'center' : null }
        >
           <Grid item classes={{root: classes.descriptionContainer}}>
              <Typography align="center" variant="h4">
                 {name}
              </Typography>
              <Typography align="center"  variant="body1" classes={{root: classes.description}}>
                  {description}
              </Typography>
           </Grid>
           <Grid item classes={{root: classes.buttonGroupContainer}}>
            <ButtonGroup>
                <Button 
                onClick={() => changeLayout("list")}
                classes={{root: clsx(classes.button, {
                    [classes.selected]: layout === "list"
                })}}>
                    <ListIcon color={layout === "list" ? "#fff": undefined}/>
                </Button>
                <Button 
                onClick={() => changeLayout("grid")}
                classes={{
                    root: clsx(classes.button, {
                    [classes.selected]: layout === "grid"
                }),
                }}>
                    <GridIcon color={layout === "grid" ? "#fff": undefined} />
                </Button>
            </ButtonGroup>
           </Grid>
        </Grid>
    )
}