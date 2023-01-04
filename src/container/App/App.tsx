import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'

type ProductsInСart = {
    [id: number]: number
}

const App = () => {
    const [productsInСart, setProductsInCart] = useState<ProductsInСart>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInСart) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInСart={productsInСart} />
            {/* <button onClick={() => addProductToCart(1, 1)}>Add to cart</button> */}
            <Main
                addProductToCart={addProductToCart}
                productsInСart={productsInСart}
            />
        </StyledEngineProvider>
    )
}
export default App
