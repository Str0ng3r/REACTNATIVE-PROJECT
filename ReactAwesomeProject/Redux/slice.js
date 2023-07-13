import { createSlice } from '@reduxjs/toolkit';
const imagesSlice = createSlice({
name:'images',
initialState:{
    images:[{location:'fghfghf',name:'hfghfg',uriName:'hfghfgh'}],
    auth:false
},
reducers:{
    setImages:(state,action)=>{
        state.images =  [...state.images,action.payload]
    },
    setIsAuth:(state,action)=>{
        state.auth = action.payload
    }
}
})
const { actions } = imagesSlice;
export const mainReducer = imagesSlice.reducer;
export const { setImages,setIsAuth } = actions;