import { Container } from '@mui/material'
import CartPage from 'Pages/CartPage/CartPage'
import AboutPage from 'Pages/AboutPage/AboutPage'
import ShippingPage from 'Pages/ShippingPage/ShippingPage'
import PaymentPage from 'Pages/PaymentPage/PaymentPage'
import Home from 'Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'

type ProductsInCart = {
    [id: number]: number
}

type ProductsLikeState = {
    [id: number]: boolean
}

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: ProductsInCart
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, changeCount: number) => void
    productsLikeState: ProductsLikeState
    changeLike: (id: number, like: boolean) => void
}

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
    productsLikeState,
    changeLike,
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
                    element={
                        <Home
                            addProductToCart={addProductToCart}
                            changeLike={changeLike}
                            productsLikeState={productsLikeState}
                        />
                    }
                />
                <Route path="about" element={<AboutPage />} />
                <Route path="shipping" element={<ShippingPage />} />
                <Route path="payment" element={<PaymentPage />} />
                <Route
                    path="cart"
                    element={
                        <CartPage
                            changeProductQuantity={changeProductQuantity}
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
