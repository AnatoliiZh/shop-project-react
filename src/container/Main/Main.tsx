import { Container } from '@mui/material'
import Home from 'pages/Home/Home'

type Props = {
    addProductToCart: (a:number, b:number) => void
}

const Main = ({addProductToCart}: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
            component="main"
        >
            <Home addProductToCart={addProductToCart}/>
        </Container>
    )
}

export default Main
