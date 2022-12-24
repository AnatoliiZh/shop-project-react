import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

type Props = {}

let res = productsArray.map(function (item) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <ProductsListItem
                title={item.title}
                desc={item.desc}
                type={item.type}
                capacity={item.capacity}
                price={item.price}
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
                {res}
            </Grid>
        </>
    )
}

export default ProductsList
