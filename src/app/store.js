import { configureStore } from "@reduxjs/toolkit"
import {loginSlice} from "../features/createSlice";
console.log(loginSlice,"login slice")
console.log(loginSlice.reducer,"login slice reducer---------------")
const store= configureStore({
  reducer: {
     users:loginSlice.reducer
  }
})

export default store;
