import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"userInfoSlice",
    initialState:{
        info:[],
        isValidateUser:null,
        accountDetails:{
           loggedInuser:null
        }
    },
    reducers:{
        addInfo:(state,action)=>{
            state.info=[...state.info,action.payload]
            localStorage.setItem("users",JSON.stringify(state.info))
        },
        verifyUser:(state,action)=>{
            const credentials=action.payload
            const info=JSON.parse(localStorage.getItem("users"))
            const response=info.find((value)=>value.email===credentials.email&&value.password===credentials.password)
            if(response){response.loggedInuser=true}
            // console.log(response)
            state.accountDetails=response;
            // console.log(state.accountDetails)
            // return state.accountDetails
        },
        signout:(state,action)=>{
            state.accountDetails={
                loggedInuser:null
            }
        }

    }
})

export const { addInfo,verifyUser,signout}=userSlice.actions
export default userSlice.reducer