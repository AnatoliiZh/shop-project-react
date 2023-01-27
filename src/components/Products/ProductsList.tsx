import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'

type ProductProps = {
    id: number
    title: string
    desc: string   
    price: number
   
}

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const ProductsList = ({ addProductToCart }: Props) => {
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
                        price,                        
                    }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                id={id}
                                title={title}
                                desc={desc}                                
                                price={price}                               
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
