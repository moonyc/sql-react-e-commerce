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
    padding: '3rem',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

   },
   descriptionContainer: {
    backgroundColor: theme.palette.primary.main,
    height: '15rem',
    width: '60rem',
    padding: '1rem',
    borderRadius: 10,
    boxShadow: theme.shadows[1]
   },
   button: {
    border: `2px solid #fff`,
    borderRightColor: `#fff !important`,
    borderRadius: 25,
   },
   selected: {
    backgroundColor: theme.palette.secondary.main
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
           <Grid item>
            <ButtonGroup>
                <Button 
                onClick={() => setLayout("list")}
                classes={{root: clsx(classes.button, {
                    [classes.selected]: layout === "list"
                })}}>
                    <ListIcon/>
                </Button>
                <Button 
                onClick={() => setLayout("grid")}
                classes={{
                    root: clsx(classes.button, {
                    [classes.selected]: layout === "grid"
                }),
                }}>
                    <GridIcon />
                </Button>
            </ButtonGroup>
           </Grid>
        </Grid>
    )
}