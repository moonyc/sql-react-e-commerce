import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography  from '@material-ui/core/Typography'
import { makeStyles  } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

}))

export default function ProductImages({ images, selectedImage, setSelectedImage}) {
    const classes = useStyles()

    return (
        <Grid item container direction='column'>
            <Grid item>
                <img 
                    src={process.env.GATSBY_STRAPI_URL + images[selectedImage].url}
                    alt='product_large'
                />
            </Grid>
            <Grid item container>
                {images.map((image, i) => (
                    <Grid item key={image.url}>
                       <img src={process.env.GATSBY_STRAPI_URL + image.url} alt={`product_small${i}`} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
} 