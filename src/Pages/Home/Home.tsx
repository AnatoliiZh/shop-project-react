import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
}

const Home = ({ addProductToCart,productsInCart,
    productsObject = getProductsObject(productsArray), }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}
            >
                Our shop page{' '}
            </Typography>
            <ProductsList addProductToCart={addProductToCart} productsInCart={productsInCart}
                productsObject={productsObject}/>
        </>
    )
}

export default Home
