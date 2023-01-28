import { Container } from '@mui/material'
import CartPage from 'Pages/CartPage/CartPage'
import AboutPage from 'Pages/AboutPage/AboutPage'
import ShippingPage from 'Pages/ShippingPage/ShippingPage'
import PaymentPage from 'Pages/PaymentPage/PaymentPage'
import Home from 'Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: ProductsInCart
    removeProductFromCart: (id: number) => void
     productsObject?: {
        [id: number]: ProductProps
    }
}

type ProductsInCart = {
    [id: number]: number
}

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    productsObject = getProductsObject(productsArray)
    
}: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
            component="main"
        >
            <Routes>
                <Route
                    path="/"
                    element={<Home addProductToCart={addProductToCart} productsInCart={productsInCart}
                    productsObject={productsObject}/>}
                />
                <Route path="about" element={<AboutPage />} />
                <Route path="shipping" element={<ShippingPage />} />
                <Route path="payment" element={<PaymentPage />} />
                <Route
                    path="cart"
                    element={
                        <CartPage
                            productsInCart={productsInCart}
                            removeProductFromCart={removeProductFromCart}
                        />
                    }
                />
            </Routes>
        </Container>
    )
}

export default Main
