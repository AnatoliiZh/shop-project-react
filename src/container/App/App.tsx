
import { useState } from 'react'
import './App.scss'


type ProductsInCart = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        // 1:0,
        // 2:0,

    })

    const addProductToCart = (id: number) => {
        setProductsInCart((prevState: ProductsInCart) => ({
            ...prevState,
            [id]: ++prevState[id] || 1 ,
        }))
    }
    

    return (
       <div className='task-1'>
                <h2>Перше завдання:</h2>
            <button onClick={() => addProductToCart(1)}>Add to cart {productsInCart[1] || 0 }</button> 
            <button onClick={() => addProductToCart(2)}>Add to cart {productsInCart[2] || 0}</button>
            <button onClick={() => addProductToCart(3)}>Add to cart {productsInCart[3] || 0}</button>
            
       </div>
        
    )
}
export default App
