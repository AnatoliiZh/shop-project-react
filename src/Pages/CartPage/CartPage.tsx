import React from 'react'
import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'
// import productsArray, {
//     getProductsObject,
//     ProductProps,
// } from 'utils/productsArray'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import { Grid } from '@mui/material'
import { useAppSelector } from 'redux/hooks'

type Props = {
    removeProductFromCart?: (id: number) => void
    changeProductQuantity: (id: number, changeCount: number) => void
}

const CartPage = ({ removeProductFromCart, changeProductQuantity }: Props) => {
    // console.log(Object.keys(productsInCart).length)
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <h2>Cart</h2>
            <Grid container spacing={2}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
