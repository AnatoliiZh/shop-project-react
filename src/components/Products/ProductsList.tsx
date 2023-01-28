import { Grid } from '@mui/material'
import CartTotal from 'components/CartTotal/CartTotal'
import productsArray, {
    getProductsObject,
    
} from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'

type ProductProps = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
}

const ProductsList = ({ addProductToCart, productsInCart,productsObject = getProductsObject(productsArray) }: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    ({
                        id,
                        title,
                        desc,
                        type,
                        capacity,
                        price,
                        image,
                    }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                id={id}
                                title={title}
                                desc={desc}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
            <CartTotal
                productsInCart={productsInCart}
                productsObject={productsObject}
            />

        </>
    )
}

export default ProductsList
