import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"userInfoSlice",
    initialState:{
        info:[{
            name:"Deepak Rathod",
            email:"D@gmail.com",
            mobile:"12347354749",
            address:"Pune"
        }]
    },
    reducers:{
        addInfo:(state,action)=>{
            state.items.push(action.payload)
        }

    }
})

export const { addInfo}=userSlice.actions
export default userSlice.reducer