import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography  from '@material-ui/core/Typography'
import { makeStyles  } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
    selected: {
        width: '40rem'
    },
    small: {
       width: '5rem'
    },
    imageItem: {
        margin: '1rem'
    }
}))

export default function ProductImages({ images, selectedImage, setSelectedImage}) {
    const classes = useStyles()

    return (
        <Grid item container direction='column' alignItems='center' xs={6}>
            <Grid item>
                <img 
                    src={process.env.GATSBY_STRAPI_URL + images[selectedImage].url}
                    alt='product_large'
                    className={classes.selected}
                />
            </Grid>
            <Grid item container justifyContent='center'>
                {images.map((image, i) => (
                    <>
                    <Grid item key={image.url} classes={{ root: classes.imageItem }}>
                    <IconButton onClick={() => setSelectedImage(i)}>
                    <img 
                           src={process.env.GATSBY_STRAPI_URL + image.url} 
                           alt={`product_small${i}`}
                           className={classes.small}   
                        />
                    </IconButton>
                    </Grid>
                    <Grid item key={image.url} classes={{ root: classes.imageItem }}>
                    <IconButton onClick={() => setSelectedImage(i)}>
                    <img 
                           src={process.env.GATSBY_STRAPI_URL + image.url} 
                           alt={`product_small${i}`}
                           className={classes.small}   
                        />
                    </IconButton>
                    </Grid>
                    <Grid item key={image.url} classes={{ root: classes.imageItem }}>
                    <IconButton onClick={() => setSelectedImage(i)}>
                    <img 
                           src={process.env.GATSBY_STRAPI_URL + image.url} 
                           alt={`product_small${i}`}
                           className={classes.small}   
                        />
                    </IconButton>
                    </Grid>
                    </>
                ))}
            </Grid>
        </Grid>
    )
} 