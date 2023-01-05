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

const CartPage = ({
    productsInСart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    // console.log(Object.keys(productsInСart).length)
    return (
        <div>
            <h2>Корзина</h2>
            <ol>
                {Object.keys(productsInСart).map((productId) => (
                    <li key={productId}>
                        {productsObject[parseInt(productId)].title} -{' '}
                        {productsInСart[parseInt(productId)]} items for{' '}
                        {productsObject[parseInt(productId)].price} $
                    </li>
                ))}
            </ol>
            <div>
                Total:{' '}
                {Object.keys(productsInСart).reduce(
                    (total, productId) =>
                        total +
                        productsInСart[parseInt(productId)] *
                            productsObject[parseInt(productId)].price,
                    0
                )}
                $
            </div>
        </div>
    )
}

export default CartPage
