import React from 'react'
import { Card, CardContent, Grid } from '@mui/material'
import { ProductProps } from 'utils/productsArray'
import './CartProductListItemExtended.scss'
import currancyArray from 'utils/currancyArray'
// import DeleteIcon from '@mui/icons-material/Delete'
// import { useState } from 'react'

type Props = {
    productCount: number
    product: ProductProps
    removeProductFromCart: (id: number) => void
    indexCurrency:number
}

const CartProductListItemExtended = ({
    // productCount,
    product,
    // removeProductFromCart,
    indexCurrency
}: Props) => {
    
    return (
        <Grid item xs={12} sm={4}>
            <Card variant="outlined">
                <CardContent className='card-content'>                    
                    <h2>{product.title}</h2>
                    <div>{product.desc}</div>
                    <p>{(product.price*currancyArray[indexCurrency].course).toFixed(2)} {currancyArray[indexCurrency].currency}</p>
                    
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
