import React from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Sort from './sort'
import Filter from './Filter'
import { makeStyles } from '@material-ui/core/styles'

import filter from '../../images/filter.svg'
import sort from '../../images/sort.svg'

const useStyles = makeStyles(theme => ({
   functionContainer: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '5rem',
    height: 'auto',
    borderRadius: ({ option }) => option !== null  ? '10px' : '10px 10px 0px 0px'
   },
}))

export default function FunctionContainer({ 
    filterOptions, 
    setFilterOptions, 
    option, 
    setOption,
    sortOptions,
    setSortOptions

}) {
    const classes = useStyles({option: option})
    

    const content = () => {
        switch (option) {
            case "sort":
                return <Sort 
                setOption={setOption}
                sortOptions={sortOptions}
                setSortOptions={setSortOptions}
                />
            case "filter":
                return <Filter setOption={setOption} filterOptions={filterOptions}
                    setFilterOptions={setFilterOptions}
                />
            default: 
            const items = [{icon: filter, alt: 'filter'}, {icon: sort, alt:'sort'}]
            return (
              <Grid item container justifyContent='space-around' alignItems='center'>
                 {items.map(item => (
                  <Grid item key={item.alt}>
                     <IconButton onClick={() => setOption(item.alt)}>
                       <img src={item.icon} alt={item.alt}/>
                     </IconButton>
                  </Grid>
                 ))}
              </Grid>
            )
            
        }
    }
    return(
        <Grid item container classes={{root: classes.functionContainer}} >
           {content()}
        </Grid>
    )
}