import { Button, Card, CardContent, Grid } from '@mui/material'
import { ProductProps } from 'utils/productsArray'
import React from 'react'
import './CartProductListItemExtended.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import { useAppDispatch } from 'redux/hooks'
import { removeProductFromCart, changeProductQuantity } from 'redux/cartReducer'

type Props = {
    productCount: number
    product: ProductProps
}

const CartProductListItemExtended = ({ productCount, product }: Props) => {
    // const count1 = useAppSelector((state) => state.productsInCart[product.id])
    const dispatch = useAppDispatch()
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="cart-img">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    {/* <p>Count: {count1}</p> */}
                    <Quantity
                        count={productCount}
                        onDecrementClick={() =>
                            productCount <= 1
                                ? dispatch(removeProductFromCart(product.id))
                                : dispatch(
                                      changeProductQuantity({
                                          id: product.id,
                                          count: productCount - 1,
                                      })
                                  )
                        }
                        onIncrementClick={() =>
                            dispatch(
                                changeProductQuantity({
                                    id: product.id,
                                    count: productCount + 1,
                                })
                            )
                        }
                        min={0}
                    ></Quantity>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            dispatch(removeProductFromCart(product.id))
                        }
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
