import './CartHeader.css'
import productsArray from 'utils/productsArray'

type Props = {
    productsInСart: {
        [id: number]: number
    }
}

const CartHeader = ({ productsInСart }: Props) => {
    console.log(productsArray[0].title)
    return (
        <div>
            {Object.keys(productsInСart).map((productId) => (
                <div key={productId}>
                    {productsArray[parseInt(productId) - 1].title} :{' '}
                    {productsInСart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
