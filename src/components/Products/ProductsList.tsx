import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

type Props = {}

let products_from_array = productsArray.map(function (i) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <ProductsListItem
                title={i.title}
                desc={i.desc}
                type={i.type}
                capacity={i.capacity}
                price={i.price}
            />
        </Grid>
    )
})

const ProductsList = (props: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {products_from_array}
            </Grid>
        </>
    )
}

export default ProductsList
