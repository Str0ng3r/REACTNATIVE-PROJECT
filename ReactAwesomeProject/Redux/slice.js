import { createSlice } from '@reduxjs/toolkit';
const imagesSlice = createSlice({
name:'images',
initialState:{
    images:[]
},
reducers:{
    setImages:(state,action)=>{
        state.images =  action.payload
    }
}
})
const { actions } = imagesSlice;
export const mainReducer = imagesSlice.reducer;
export const { setImages } = actions;