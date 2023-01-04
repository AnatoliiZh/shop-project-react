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

const CartHeader = ({
    productsInСart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    console.log(productsArray[0].title)
    return (
        <div>
            {Object.keys(productsInСart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].title} :{' '}
                    {productsInСart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
