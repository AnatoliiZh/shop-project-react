import { Button, Container} from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import { useState } from 'react'
import './App.scss'

type Props = {}
const App = (props: Props) => {
    const [indexCurrency, setIdCurrency] = useState(0)
    // const changeIdCurrency = (index:number) => {
    //     setIdCurrency(index)
    // }


    return (
        <>
        <Container className='container' maxWidth="md">
            <h1>Our shop page</h1>

            
            <div className='box-btn'>

            <Button variant='outlined' onClick={() => setIdCurrency(0)}>USD</Button>
            <Button variant='outlined' onClick={() => setIdCurrency(1)}>EUR</Button>
            <Button variant='outlined' onClick={() => setIdCurrency(2)}>UAH</Button>
            <Button variant='outlined' onClick={() => setIdCurrency(3)}>PLN</Button>
            </div>

            <ProductsList indexCurrency={indexCurrency}/>
        </Container>
        </>
    )
}
export default App
