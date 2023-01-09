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

const CartTotal = ({
    productsInСart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
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
    )
}
export default CartTotal
