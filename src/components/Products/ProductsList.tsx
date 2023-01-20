import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'

type Props = {
    indexCurrency: number
}
export const curArr = [
    {
        currency: 'USD',
        k: 1,
    },
    {
        currency: 'EUR',
        k: 0.93,
    },
    {
        currency: 'UAH',
        k: 40,
    },
    {
        currency: 'PLN',
        k: 4.4,
    },
]

const ProductsList = ({ indexCurrency }: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 12"
                        desc="This is iPhone 12 ..."
                        price={750}
                        indexCurrency={indexCurrency}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 8"
                        desc="This is iPhone 8 ..."
                        price={850}
                        indexCurrency={indexCurrency}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone X"
                        desc="This is iPhone X ..."
                        price={1250}
                        indexCurrency={indexCurrency}
                    />
                </Grid>
            </Grid>
            <h2>
                Total{' '}
                {`${((750 + 850 + 1250) * curArr[indexCurrency].k).toFixed(
                    2
                )} ${curArr[indexCurrency].currency}`}
            </h2>
        </>
    )
}

export default ProductsList
