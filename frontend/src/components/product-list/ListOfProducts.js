import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import ProductFrameGrid from './ProductFrameGrid'
import ProductFrameList from './ProductFrameList'

const useStyles = makeStyles(theme => ({
  productContainer: {
    width: '95%',
    [theme.breakpoints.only('xl')]:
    {
        "& > *": {
            marginRight: ({ layout }) => layout === 'grid' ? 'calc((100% - (25rem * 4)) / 3)' : 0,
            marginBottom: '5rem'
        },
        "& > :nth-child(4n)": {
            marginRight: 0
        }
    },
    [theme.breakpoints.only('lg')]:
    {
        "& > *": {
            marginRight: ({ layout }) => layout === 'grid' ? 'calc((100% - (25rem * 3)) / 2)' : 0,
            marginBottom: '5rem'
        },
        "& > :nth-child(3n)": {
            marginRight: 0
        }
    },
    [theme.breakpoints.only('md')]:
    {
        "& > *": {
            marginRight: ({ layout }) => layout === 'grid' ? 'calc((100% - (25rem * 2)) / 1)' : 0,
            marginBottom: '5rem'
        },
        "& > :nth-child(2n)": {
            marginRight: 0
        }
    },
    [theme.breakpoints.down('sm')]:
    {
        "& > *": {
            marginBottom: '5rem'
        }
    }
    
  }
}))

export default function ListOfProducts({ products, layout, page, productsPerPage, filterOptions}) {
    const classes = useStyles({ layout })
    const matchesSM = useMediaQuery(theme => theme.breakpoints.down('sm'))


    const FrameHelper = ({Frame, product, variant}) => {

        const [selectedSize, setSelectedSize] = useState(null)
        const [selectedColor, setSelectedColor] = useState(null)
    
        var sizes=[]
        var colors= []
        product.node.variants.map(variant => {
            sizes.push(variant.size)
            if(!colors.includes(variant.color))
            {
                colors.push(variant.color)
            }
            
            return null
        })
    
         return (
         <Frame 
         sizes={sizes} 
         colors={colors} 
         selectedColor={selectedColor}
         selectedSize={selectedSize} 
         setSelectedSize={setSelectedSize}
         setSelectedColor={setSelectedColor}
         variant={variant} 
         product={product} />
         )
    }
    
    var content = []
    products.map((product, index) => product.node.variants.map(variant => content.push({ product: index, variant: variant})))
    

    let isFiltered = false
   /* The filter method passes a function that tests each item. */
    const filteredProducts = content.filter(item => {
        let valid;
        
        Object.keys(filterOptions)
              .filter(option => filterOptions[option] !== null)
              .map(option => {
                filterOptions[option].forEach(value => {
                    if(value.checked){
                        isFiltered = true
                        if(item.variant[option.toLowerCase()] === value.label) {
                            valid = item
                        }
                    }
                })
              })

        return valid
    })

    if(isFiltered)
    {
        content = filteredProducts
    }
    return (
       <Grid item container 
          direction={matchesSM ? 'column' : 'row'} 
          classes={{root: classes.productContainer}} 
          alignItems={matchesSM ? 'center' : undefined}
          >
           {content.slice((page - 1) * productsPerPage, page * productsPerPage).map(item => (
                <FrameHelper 
                Frame={layout === 'grid' ? ProductFrameGrid : ProductFrameList}
                key={item.variant.id}
                variant={item.variant}
                product={products[item.product]}/>

            ))
           }
       </Grid>
    )
}