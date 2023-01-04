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
    return (
        <div>
            <h2>Корзина</h2>
            <ol>
                {Object.keys(productsInСart).map((productId) => (
                    <li key={productId}>
                        {productsObject[parseInt(productId)].title} -{' '}
                        {productsInСart[parseInt(productId)]} шт. по{' '}
                        {productsObject[parseInt(productId)].price} грн.
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
