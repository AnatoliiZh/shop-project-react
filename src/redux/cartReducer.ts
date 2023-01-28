import {createSlice} from '@reduxjs/toolkit'

type ProductsIncCart = {
    [id:number]:number
}

export const initialState:ProductsIncCart = {
    1:3,
    2:3
}

export const cartSlice = createSlice({
    name: 'productsInCart',
    initialState,
    reducers:{}
})    

export default cartSlice.reducer

// export const {toggleLikeState} = likeSlice.actions