import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'

type ProductsInСart = {
    [id: number]: number
}

const App = () => {
    const [productsInСart, setProductsInCart] = useState<ProductsInСart>({
        1: 5,
        2: 1,
    })

    const addProductToCart = (count: number, price: number) => {}

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInСart={productsInСart} />
            {/* <button onClick={() => addProductToCart(5, 500)}></button> */}
            <Main addProductToCart={addProductToCart} />
        </StyledEngineProvider>
    )
}
export default App
