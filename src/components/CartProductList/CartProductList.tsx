import React from 'react'
import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
    CartItem?: any
    removeProductFromCart?: (id: number) => void
    changeProductToCart: (id: number, changeCount: number) => void
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
    changeProductToCart,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                    removeProductFromCart={removeProductFromCart}
                    changeProductToCart={changeProductToCart}
                />

                // <li key={productId}>
                //     {productsObject[parseInt(productId)].title} -{' '}
                //     {productsInCart[parseInt(productId)]} items for{' '}
                //     {productsObject[parseInt(productId)].price} $
                // </li>
            ))}
        </>
    )
}

export default CartProductList
