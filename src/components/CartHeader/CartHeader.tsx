import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'
import { useAppSelector } from 'redux/hooks'

// type Props = {
//     productsInCart: {
//         [id: number]: number
//     }
// }

const CartHeader = () => {
    // console.log(productsArray[0].title)
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartHeader
