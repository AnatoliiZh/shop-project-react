import React from 'react'
import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInСart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
    CartItem?: any
    removeProductFromCart?: (id: number) => void
}

const CartProductList = ({
    productsInСart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
}: Props) => {
    return (
        <>
            {Object.keys(productsInСart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInСart[parseInt(productId)]}
                    removeProductFromCart={removeProductFromCart}
                />

                // <li key={productId}>
                //     {productsObject[parseInt(productId)].title} -{' '}
                //     {productsInСart[parseInt(productId)]} items for{' '}
                //     {productsObject[parseInt(productId)].price} $
                // </li>
            ))}
        </>
    )
}

export default CartProductList
