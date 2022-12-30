import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'

type Props = {}

type CartData = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartData>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToCart = (a:number, b:number) => {
        setCartData({
            totalCount: cartData.totalCount + a ,
        totalPrice: cartData.totalPrice + a*b,
        })
    }
    

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            {/* <button onClick={() => addProductToCart(5,500)}></button> */}
            <Main addProductToCart={addProductToCart}/>
        </StyledEngineProvider>
    )
}
export default App
