import React, { useState } from 'react'
import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'
import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import { Button, Grid, Container } from '@mui/material'
import './CartPage.scss'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
    removeProductFromCart?: (id: number) => void
}

const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    removeProductFromCart,
}: Props) => {
    // console.log(Object.keys(productsInCart).length)
    const [indexCurrency, setIdCurrency] = useState(0)
    return (
        <div>
            <Container className="container" maxWidth="md">
            <h1>Our shop page</h1>
            <div className='btn-box'>
                <Button variant="outlined"
                            onClick={() => setIdCurrency(0)}>USD</Button>
                <Button variant="outlined"
                            onClick={() => setIdCurrency(1)}>EUR</Button>            
                <Button variant="outlined"
                            onClick={() => setIdCurrency(2)}>UAH</Button>
                <Button variant="outlined"
                            onClick={() => setIdCurrency(3)}>PLN</Button>            
            </div>
            <Grid container spacing={2}>
                <CartProductList
                    productsInCart={productsInCart}
                    productsObject={productsObject}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    indexCurrency={indexCurrency}
                />
            </Grid>

            <CartTotal
                productsInCart={productsInCart}
                productsObject={productsObject}
                indexCurrency={indexCurrency}
            />
            </Container>
        </div>
    )
}

export default CartPage
