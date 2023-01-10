import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
}

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    // console.log(productsArray[0].title)
    return (
        <div>
            <CartProductList
                productsInCart={productsInCart}
                productsObject={productsObject}
            />
            <CartTotal
                productsInCart={productsInCart}
                productsObject={productsObject}
            />
        </div>
    )
}
export default CartHeader
