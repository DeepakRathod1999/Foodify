import {createSlice} from '@reduxjs/toolkit'



const  cartSlice =createSlice({
    name:"cartslice",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearAll:(state)=>{
            state.items.length=0
        }
    }
})

export  const {addItem,clearAll} = cartSlice.actions
export default cartSlice.reducer 