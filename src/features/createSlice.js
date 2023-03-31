import { createSlice } from "@reduxjs/toolkit"
import { act } from "@testing-library/react";
import { useState } from "react";
//import DumyUsers from "../components/DumyUsers"
import LoginPage from "../components/LoginPage";
const DumyUsers =[{name:'nikhil',dob:1-10-1999,username:'npatil'},
{name:'kajol',dob:12-12-2000,username:'kjadhav'},
{name:'paresh',dob:26-2-1996,username:'pdhande'}]

const loginUserName=''
let errmsg=""
const loginSlice= createSlice({
  name:'users',
  initialState:{
  users:[],
  loginUserName,
  resetPasswordToken: null
  },
  reducers:{
    signup (state,action){
      //console.log(action.payload,"----------------------")
      
      let newUsers=state.users;
      newUsers.push(action.payload)
      state.users=newUsers
     
      state.loginUserName=action.payload.name
      console.log(action.payload,"paylaod")
    },
    login (state,action){
      state.users=action.payload
      state.loginUserName=action.payload.name
      console.log(action.payload.name)
 },
      logout (state){
        state.users=null

      },
      // setResetPassword(state, action) {
      //   state.resetPasswordToken = action.payload;
      // },
      // resetPasswordSuccess(state) {
      //   state.resetPasswordToken = null;
      //   state.error = null;
      // },

    
    }

  }
  

)

export const {signup,login,logout} =loginSlice.actions
export default loginSlice.reducer
//console.log(DumyUsers,"==============")


