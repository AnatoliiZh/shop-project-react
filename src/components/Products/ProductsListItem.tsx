import { Button, Card, CardContent } from '@mui/material'
import { curArr } from './ProductsList'
import './ProductsListItem.scss'

type Props = {
    title: string
    desc: string

    price: number
    indexCurrency: number
}

const ProductsListItem = ({ title, desc, price, indexCurrency }: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent className="card">
                <div className="product-title">{title}</div>
                <div className="product-decs">{desc}</div>
                <div className="product-price">
                    {`${(price * curArr[indexCurrency].k).toFixed(2)} ${
                        curArr[indexCurrency].currency
                    }`}
                </div>
                <Button variant="outlined">Buy</Button>
            </CardContent>
        </Card>
    )
}

export default ProductsListItem
