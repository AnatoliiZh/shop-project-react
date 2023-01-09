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
    productsInСart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
}

const CartPage = ({
    productsInСart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    // console.log(Object.keys(productsInСart).length)
    return (
        <div>
            <h2>Cart</h2>
            <Grid container spacing={2}>
                <CartProductList
                    productsInСart={productsInСart}
                    productsObject={productsObject}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>

            <CartTotal
                productsInСart={productsInСart}
                productsObject={productsObject}
            />
        </div>
    )
}

export default CartPage
