import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import fullStar from '../../images/full-star.svg'
import halfStar from '../../images/half-star.svg'
import emptyStar from '../../images/empty-star.svg'


const useStyles = makeStyles(theme => ({
    size: {
        height: '2rem',
        width: '2rem'
    }
}))
export default function Rating({ number }) {
  const difference = 5 - Math.ceil(number) // Array of number of empty star
  const classes = useStyles()
  // this is going to be a react fragment
  return (
    <>
        {[...Array(Math.floor(number))].map((element, index) => (
            <img src={fullStar} alt="full star" key={index} className={classes.size}/>
        ))}  {/** Array od numer of full star */}
        { number % 1 !== 0 ? <img src={halfStar} alt="half star" className={classes.size}/> : null}
        {[...Array(difference)].map((element, index) => ( 
            <img src={emptyStar} alt="empty star" key={`${index} - empty`}  className={classes.size}/> 
            ))}
    </>
  )
}