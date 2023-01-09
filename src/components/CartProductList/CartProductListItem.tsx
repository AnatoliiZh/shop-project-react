import React from 'react'
import { ProductProps } from 'utils/productsArray'

type Props = {
    productCount: number
    product: ProductProps
}

const CartProductListItem = ({ productCount, product }: Props) => {
    return (
        <div>
            {' '}
            {product.title} - {productCount}
        </div>
    )
}

export default CartProductListItem
