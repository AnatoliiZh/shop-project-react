
import { useState } from 'react'


type ProductsInCart = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCart) => ({
            ...prevState,
            [id]: prevState[id] + count,
        }))
    }

   

    return (
       <div>

           
            <button onClick={() => addProductToCart(1, 1)}>Add to cart {productsInCart[1]}</button> 
            {/* <button onClick={() => addProductToCart(2, 1)}>Add to cart {productsInCart[2]}</button>  */}
       </div>
        
    )
}
export default App
