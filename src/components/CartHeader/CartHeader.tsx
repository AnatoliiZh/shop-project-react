import './CartHeader.css'
import productsArray from 'utils/productsArray'

type Props = {
    productsInСart: {
        [id: number]: number
    }
}

type ProductProps = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
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
