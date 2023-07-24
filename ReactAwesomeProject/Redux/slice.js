import { createSlice } from '@reduxjs/toolkit';
const imagesSlice = createSlice({
name:'images',
initialState:{
    images:[],
    auth:false,
    user:null
},
reducers:{
    setImages:(state,action)=>{
        state.images =  [...state.images,action.payload]
    },
    setIsAuth:(state,action)=>{
        state.auth = action.payload
    },
    setUser:(state,action)=> {
state.user = action.payload
    }
}
})
const { actions } = imagesSlice;
export const mainReducer = imagesSlice.reducer;
export const { setImages,setIsAuth,setUser } = actions;