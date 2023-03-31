import React, { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { login } from "../features/createSlice"
import { logout } from "../features/createSlice"

import DisplayUsers from "../features/DisplayUsers"
import { loginSlice } from "../features/createSlice"
import { Navigate, useNavigate } from "react-router"



const Blog = () => {

    // const user = useSelector((state) => {
    //     console.log(state.users,"++++++++++++++++++++++++++++++")
    //     return state.users.username
    //   })
const user=useSelector((state)=>{
  //console.log(state.users.loginUserName)
  return state.users.loginUserName
})
   
const loginUser=useSelector((state)=>{
    //console.log(state.users.loginUserName)
    return state.users.loginUserName
  })
     
  
// const logUser=useSelector((state)=>{
//   return state.users.users
// })

const navigate = useNavigate()
const dispatch=useDispatch()
    

   
    // const count = useSelector((state) => state.counter.value)
    const logOut = () =>{
      dispatch(logout (navigate("/")))
      
    }


    return (
        <>
            <div>
              <h1>Hey {user || loginUser} </h1>
            
  
            
                <textarea>
             
                </textarea><br></br>
                <button>Delete</button><br></br>
                <button>Edit</button> <br></br>

                <button onClick={logOut}>Logout</button>
              
              
               

            </div>
        </>
    )
}
export default Blog