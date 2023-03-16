import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography  from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles  } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  size: {
    color: '#fff'
  }
}))

export default function Sizes({ sizes }) {
    const classes = useStyles()

    const possibleSizes = ["S", "M", "L"]
    var actualSizes = []

  if (possibleSizes.every(size => sizes.includes(size))) {
    actualSizes = possibleSizes
  } 

    return (
        <Grid item container justifyContent="space-between">
             {actualSizes.map(size => (
                <Grid item key={size}>
                   <Button>
                      <Typography variant="h3" clases={{root: classes.size}}>
                        {size}
                      </Typography>
                   </Button>
                </Grid>
             ))}
        </Grid>
    )
} 