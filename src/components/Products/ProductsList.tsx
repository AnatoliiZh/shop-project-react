import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

type ProductProps = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}

type Props = {}

// let products_from_array = productsArray.map(function (i) {
//     return (
//         <Grid item xs={12} sm={6} md={4}>
//             <ProductsListItem
//                 title={i.title}
//                 desc={i.desc}
//                 type={i.type}
//                 capacity={i.capacity}
//                 price={i.price}
//             />
//         </Grid>
//     )
// })

//  {products_from_array}

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
                {productsArray.map((product: ProductProps) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductsListItem
                            title={product.title}
                            desc={product.desc}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProductsList
