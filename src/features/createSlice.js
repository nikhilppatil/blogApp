import { createSlice } from "@reduxjs/toolkit"

const loginSlice= createSlice({
  name:'user',
  initialState:[],
  
  reducers:{
    signup:(state,action)=>{
      state.push(action.payload)
      console.log(action.payload,"----------------------")
    }
  }
  

})

export default loginSlice.reducer
export {loginSlice};
export const {signup} =loginSlice.actions
console.log(loginSlice.actions)

