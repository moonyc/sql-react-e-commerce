import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

import FunctionContainer from './FunctionContainer'
import DescriptionContainer from './DescriptionContainer'

const useStyles = makeStyles(theme => ({
   toolbar: {
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: 10,
    width: '95%',
    minHeight: '15rem',
    height: 'auto',
    marginBottom: '3rem'
   }
}))

export default function DynamicToolbar({ filterOptions, name, description }) {
    const classes = useStyles()

    return(
        <Grid item container direction="column"  classes={{root: classes.toolbar}}>
          <FunctionContainer filterOptions={filterOptions}/>
          <DescriptionContainer name={name} description={description}/>
        </Grid>
    )
}