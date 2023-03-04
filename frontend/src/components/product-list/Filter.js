import React from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'

import filter from '../../images/filter.svg'
import close from '../../images/close-outline.svg'

const useStyles = makeStyles(theme => ({
   chipRoot: {
    backgroundColor: theme.palette.secondary.main,

   },
   chipLabel: {
    ...theme.typography.body1,
    color: '#fff',
    fontWeight: 500
   },
   mainContainer: {
    padding: '1rem 0' 
   },
   checkbox: {
    color:'#fff',
    
   }
}
))

export default function Filter({ setOption, filterOptions }) {
    const classes = useStyles()
    

    
    return(
        <Grid item container justifyContent='space-between' alignItems="center">
            <Grid item>
                <IconButton onClick={() => setOption(null)}>
                    <img src={filter} alt="filter" />
                </IconButton>
            </Grid>
            <Grid item xs>
                <Grid container justifyContent="space-around" alignItems="center"
                 classes={{root: classes.mainContainer}}>
                   {Object.keys(filterOptions).filter(option => (
                     filterOptions[option] !== null
                   )).map(option => (
                    <Grid item key={option}>
                      <Grid container direction="column">
                         <Grid item>
                         <Chip 
                         label={option}  
                         classes={{root: classes.chipRoot, label: classes.chipLabel}}/>
                        </Grid>
                        <Grid item>
                           <FormControl>
                             <FormGroup>
                                {filterOptions[option].map(({label, checked}) => (
                                    <FormControlLabel 
                                    classes={{label: classes.checkbox}}
                                    key={label} 
                                    label={label} 
                                    control={<Checkbox classes={{root: classes.checkbox}}checked={checked} name={label} />} />
                                ))}
                             </FormGroup>
                           </FormControl>
                        </Grid>
                      </Grid>
                     </Grid>
                   ))}
                </Grid>
            </Grid>
            <Grid item>
                <IconButton onClick={() => setOption(null)}>
                    <img src={close} alt="close"/>
                </IconButton>
            </Grid>
        </Grid>
    )
}