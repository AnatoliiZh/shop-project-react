import React from 'react'
import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'

import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import { Grid } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'

const CartPage = () => {
    // console.log(Object.keys(productsInCart).length)
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <h2>Cart</h2>
            <Grid container spacing={2}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
            <Link to="/checkout">Proceed to checkout</Link>
        </div>
    )
}

export default CartPage
