import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type ProductsLikeState = {
    [id: number]: boolean
}

type Props = {
    addProductToCart: (id: number, count: number) => void
    changeLike: (id: number, like: boolean) => void
    productsLikeState: ProductsLikeState
}

const Home = ({ addProductToCart, changeLike, productsLikeState }: Props) => {
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
                List of Products{' '}
            </Typography>
            <ProductsList
                addProductToCart={addProductToCart}
                changeLike={changeLike}
                productsLikeState={productsLikeState}
            />
            <Reviews />
        </>
    )
}

export default Home
