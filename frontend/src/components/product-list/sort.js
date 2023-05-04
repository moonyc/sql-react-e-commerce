import React from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Chip from '@material-ui/core/Chip'
import clsx from 'clsx'
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
    },
    notActive: {
        backgroundColor : theme.palette.primary.main
    }
}))

export default function Sort({ setOption, sortOptions, setSortOptions }) {
    const classes = useStyles()
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs'))
    
    const handleSort = index => {
        const newOptions = [...sortOptions]

        newOptions.map(option => option.active = false)

        newOptions[index].active = true

        setSortOptions(newOptions)
    }

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
                   {sortOptions.map((option, index) => (
                    <Grid item classes={{root: classes.chipContainer}} key={option.label}>
                       <Chip 
                         label={option.label}
                         onClick={() => handleSort(index)}  
                         color = {option.active !== true ? "primary" : "secondary"}
                         classes={{root: clsx({
                            [classes.notActive] : option.active != true
                         })}}
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