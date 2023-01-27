import CssBaseline from '@mui/material/CssBaseline'
// import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'
import { omit } from 'lodash'

type ProductsInCart = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1:1, 2:1, 3:1
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCart) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart(
            (prevState: ProductsInCart) => omit(prevState, [id])
            // let prevProductsInCart = { ...prevState }
            // delete prevProductsInCart[id]
            // return prevProductsInCart
        )
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            {/* <Header productsInCart={productsInCart} /> */}
            {/* <button onClick={() => removeProductFromCart(1)}>Delete</button> */}
            {/* <button onClick={() => addProductToCart(1, 1)}>Add to cart</button> */}
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
            />
        </StyledEngineProvider>
    )
}
export default App
