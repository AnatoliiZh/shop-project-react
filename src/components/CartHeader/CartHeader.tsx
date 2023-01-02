import './CartHeader.css'

type Props = {
    productsInСart: {
        [id: number]: number
    }
}

const CartHeader = ({ productsInСart }: Props) => {
    console.log(Object.keys(productsInСart))
    return (
        <div>
            {/* <div>{cartData.totalCount}</div>
            <div>$ {cartData.totalPrice}</div> */}
            {Object.keys(productsInСart).map((productId) => (
                <div>
                    {productId} : {productsInСart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
