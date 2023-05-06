import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography  from '@material-ui/core/Typography'
import { makeStyles  } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    selected: {
        width: '40rem'
    },
    small: {
       width: '5rem'
    }
}))

export default function ProductImages({ images, selectedImage, setSelectedImage}) {
    const classes = useStyles()

    return (
        <Grid item container direction='column'>
            <Grid item>
                <img 
                    src={process.env.GATSBY_STRAPI_URL + images[selectedImage].url}
                    alt='product_large'
                    className={classes.selected}
                />
            </Grid>
            <Grid item container>
                {images.map((image, i) => (
                    <Grid item key={image.url}>
                       <img 
                           src={process.env.GATSBY_STRAPI_URL + image.url} 
                           alt={`product_small${i}`}
                           className={classes.small}   
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
} 