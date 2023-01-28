import {createSlice} from '@reduxjs/toolkit'

type LikeProducts = {
    [id:number]:boolean
}

export const initialState:LikeProducts = {
    1:true,
    3:true
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers:{
        toggleLikeState: (prevState, action) => ({
            ...prevState,
            [action.payload]: !prevState[action.payload]
        })
    },
})    

export default likeSlice.reducer

export const {toggleLikeState} = likeSlice.actions