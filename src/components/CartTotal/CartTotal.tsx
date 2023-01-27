import React from 'react'
import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import currancyArray from 'utils/currancyArray'
import './CartTotal.scss'

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
        <div className='total'>
            Total:{' '}
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsInCart[parseInt(productId)] * productsObject[parseInt(productId)].price * currancyArray[indexCurrency].course,
                0
            )}
            {` ${currancyArray[indexCurrency].currency}`}
        </div>
    )
}
export default CartTotal
