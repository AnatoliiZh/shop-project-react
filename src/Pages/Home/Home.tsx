import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {
    addProductToCart: (a: number, b: number) => void
}

const Home = (addProductToCart: Props) => {
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
                List of Products{''}
            </Typography>
            <ProductsList addProductToCart={addProductToCart} />
        </>
    )
}
export default Home
