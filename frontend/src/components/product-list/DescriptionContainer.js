import React, { useState } from 'react'
import clsx from 'clsx'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

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
    position: 'relative'

   },

   descriptionContainer: {
    backgroundColor: theme.palette.primary.main,
    height: '15rem',
    width: '60rem',
    padding: '1rem',
    borderRadius: 10,
    boxShadow: theme.shadows[1]
   },
   buttonGroupContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: '2.7rem',
    marginBottom: '3rem'
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

export default function DescriptionContainer({name, description}) {
    const classes = useStyles()
    const [layout, setLayout] = useState("grid")
   console.log(layout)
    return(
        <Grid item container classes={{root: classes.mainContainer}} justifyContent="center">
           <Grid item classes={{root: classes.descriptionContainer}}>
              <Typography align="center" variant="h4" paragraph gutterbutton="true">
                 {name}
              </Typography>
              <Typography align="center"  variant="body1" classes={{root: classes.description}}>
                  {description}
              </Typography>
           </Grid>
           <Grid item classes={{root: classes.buttonGroupContainer}}>
            <ButtonGroup>
                <Button 
                onClick={() => setLayout("list")}
                classes={{root: clsx(classes.button, {
                    [classes.selected]: layout === "list"
                })}}>
                    <ListIcon color={layout === "list" ? "#fff": undefined}/>
                </Button>
                <Button 
                onClick={() => setLayout("grid")}
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