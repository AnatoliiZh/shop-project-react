import React, { useState } from 'react'
import { Typography } from '@mui/material'

type Props = {}

type Order = {
    name: string
    address: string
}

const CheckoutPage = (props: Props) => {
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        address: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: Order) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: Order) => ({
            ...prevState,
            address: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() //отмена перезагрузки страницы по умолчанию
    }

    const renderForm = () => {
        return (
            <form>
                <div>
                    <input
                        type="text"
                        value={orderData.name}
                        placeholder="Your name"
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={orderData.address}
                        placeholder="Your address"
                        onChange={handleAddress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div>
                <div>Dear, {orderData.name}, thanks for order!</div>
                <div>Address: {orderData.address}</div>
            </div>
        )
    }

    // console.log(orderData)

    return (
        <>
            <Typography variant="h4" sx={{ margin: '20px 0' }}>
                Checkout
            </Typography>
            {isOrderSend ? renderMessage() : renderForm()}
        </>
    )
}

export default CheckoutPage
