import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { omit } from 'lodash'

type ProductsInCart = {
    [id: number]: number
}

type ProductsLikeState = {
    [id: number]: boolean
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({})

    const [productsLikeState, setProductsLikeState] =
        useState<ProductsLikeState>({
            1: true,
            2: true,
        })

    const changeLike = (id: number, like: boolean) => {
        setProductsLikeState((prevState: ProductsLikeState) => ({
            ...prevState,
            [id]: !like,
        }))
    }

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCart) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    // const changeProductToCart = (id: number, changeCount: number) => {
    //     setProductsInCart((prevState: ProductsInCart) => ({
    //         ...prevState,
    //         [id]: changeCount,
    //     }))
    // }

    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCart) => ({
            ...prevState,
            [id]: count,
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
            <Header productsInCart={productsInCart} />
            {/* <button onClick={() => removeProductFromCart(1)}>Delete</button> */}
            {/* <button onClick={() => addProductToCart(1, 1)}>Add to cart</button> */}
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
                productsLikeState={productsLikeState}
                changeLike={changeLike}
            />
        </StyledEngineProvider>
    )
}
export default App
