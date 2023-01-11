import React from 'react'
import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'
import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import { Grid } from '@mui/material'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
    removeProductFromCart?: (id: number) => void
    changeProductQuantity: (id: number, changeCount: number) => void
}

const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    // console.log(Object.keys(productsInCart).length)
    return (
        <div>
            <h2>Cart</h2>
            <Grid container spacing={2}>
                <CartProductList
                    productsInCart={productsInCart}
                    productsObject={productsObject}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>

            <CartTotal
                productsInCart={productsInCart}
                productsObject={productsObject}
            />
        </div>
    )
}

export default CartPage
