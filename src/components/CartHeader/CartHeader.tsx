import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'

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
    // console.log(productsArray[0].title)
    return (
        <div>
            <CartProductList
                productsInСart={productsInСart}
                productsObject={productsObject}
            />
            <CartTotal
                productsInСart={productsInСart}
                productsObject={productsObject}
            />
        </div>
    )
}
export default CartHeader
