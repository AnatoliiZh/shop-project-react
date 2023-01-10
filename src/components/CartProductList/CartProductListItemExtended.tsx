import { Button, Card, CardContent, Grid, TextField } from '@mui/material'
import { ProductProps } from 'utils/productsArray'
import React from 'react'
import './CartProductListItemExtended.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'

type Props = {
    productCount: number
    product: ProductProps
    removeProductFromCart: (id: number) => void
}

const CartProductListItemExtended = ({
    productCount,
    product,
    removeProductFromCart,
}: Props) => {
    const [count, setCount] = useState<number>(productCount)

    const onIncrementClick = () => {
        setCount((prevState: number) => prevState + 1)
    }

    const onDecrementClick = () => {
        setCount((prevState: number) => prevState - 1)
    }
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="cart-img">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    {/* <p>Count: {productCount}</p> */}
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={onDecrementClick}
                            disabled={count <= 1}
                        >
                            -
                        </Button>
                        <TextField value={count} size="small" />
                        <Button
                            variant="outlined"
                            onClick={onIncrementClick}
                            disabled={count >= 10}
                        >
                            +
                        </Button>
                    </div>
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
