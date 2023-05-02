import React from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core'
import {useMediaQuery} from '@material-ui/core'

import sort from '../../images/sort.svg'
import close from '../../images/close-outline.svg'

const useStyles = makeStyles(theme => ({
    chipContainer: {
        [theme.breakpoints.down('md')]:
        {
            margin: '0.5rem'
        }
    }
}))

export default function Sort({ setOption }) {
    const classes = useStyles()
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs'))
    const sortOptions = [{label: "A-Z"}, {label: "Z-A"}, {label: "NEWEST"}, {label: "OLDEST"}, {label: "PRICE ↑"}, {label: "PRICE ↓"}, {label: "REVIEWS"}]

    return(
        <Grid item container justifyContent='space-between' alignItems="center">
            <Grid item>
                <IconButton onClick={() => setOption(null)}>
                    <img src={sort} alt="sort" />
                </IconButton>
            </Grid>
            <Grid item xs>
                <Grid container 
                justifyContent="space-around" 
                direction={matchesXS ? 'column' : 'row'}
                alignItems={matchesXS ? 'center' : undefined}
                >
                   {sortOptions.map(option => (
                    <Grid item classes={{root: classes.chipContainer}} key={option.label}>
                       <Chip 
                         label={option.label}  
                        />
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