import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
// import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Menu from 'components/Menu/Menu'
import CartHeader from 'components/CartHeader/CartHeader'
import Logo from 'components/Logo/Logo'
// import { green } from '@mui/material/colors'
import './Header.scss'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    changeProductToCart: (id: number, changeCount: number) => void
}

const Header = ({ productsInCart, changeProductToCart }: Props) => {
    // console.log(productsInCart)
    let appBar = false
    return (
        <>
            <AppBar
                position="static"
                className={`${appBar ? 'app-bar-grey' : 'app-bar'}`}
            >
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Logo />
                        <Menu />
                        <CartHeader
                            productsInCart={productsInCart}
                            changeProductToCart={changeProductToCart}
                        />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header
