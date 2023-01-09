import React from 'react'
import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'

type Props = {
    productsInСart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
}

const CartProductList = ({
    productsInСart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <ol>
            {Object.keys(productsInСart).map((productId) => (
                <li key={productId}>
                    {productsObject[parseInt(productId)].title} -{' '}
                    {productsInСart[parseInt(productId)]} items for{' '}
                    {productsObject[parseInt(productId)].price} $
                </li>
            ))}
        </ol>
    )
}

export default CartProductList
