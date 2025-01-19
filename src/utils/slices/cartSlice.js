import {createSlice} from '@reduxjs/toolkit'



const  cartSlice =createSlice({
    name:"cartslice",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{

            const payload=action.payload
           const chk= state.items.every((item)=> payload.id!=item.id)
           if(chk){
            // state.items.push(payload)
            state.items=[...state.items,payload]
            // return state.items
           }
        },
        clearAll:(state)=>{
            state.items.length=0
        },
        deleteSingle:(state,action)=>{
            const id=action.payload
           state.items= state.items.filter((item)=>item.id!=id)

        },
        increaseQuantity:(state,action)=>{
            const payload=action.payload
           const data= state.items.map((item)=>{
                if(payload==item.id  && item.quantity>=1)
                {
                    item.quantity=item.quantity+1;
                    item.totalPrice=item.price*item.quantity
                    return item
                }
                else{
                   return item
                }
               })
               state.items=data
        },
        decreaseQuantity:(state,action)=>{
            const payload=action.payload
            const data=state.items.map((item)=>{
                if(payload==item.id && item.quantity>1)
                {
                      item.quantity=item.quantity-1
                      item.totalPrice=item.price*item.quantity

                     return item
                }
                else{
                       return  item
                    }
               })
               state.items=data
        }
    }
})

export  const {addItem,clearAll,increaseQuantity,decreaseQuantity,getQuantity,deleteSingle} = cartSlice.actions
export default cartSlice.reducer 