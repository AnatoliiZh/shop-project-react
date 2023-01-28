import React from 'react'
import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import currencyArray from 'utils/currencyArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
    indexCurrency:number
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    indexCurrency
}: Props) => {
    return (
        <div>
            Total:{' '}
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsInCart[parseInt(productId)] *
                        productsObject[parseInt(productId)].price * currencyArray[indexCurrency].course,
                0
            ).toFixed(2)}
             {` ${currencyArray[indexCurrency].currency}`}
        </div>
    )
}
export default CartTotal
