import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import signup from '../features/createSlice'
import { fakeUserData } from '../api'
import DisplayUsers from '../features/DisplayUsers'
//import DumyUsers from './DumyUsers'
// const DumyUsers =[{name:'nikhil',dob:1-10-1999,username:'npatil'},
// {name:'kajol',dob:12-12-2000,username:'kjadhav'},
// {name:'paresh',dob:26-2-1996,username:'pdhande'}]


function SignUp() {

  const [name, setName] = useState("")
  const [dob, setDob] = useState("")
  const [male, setMale] = useState()
  const [female, setFemale] = useState()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  

  const dispatch = useDispatch()

  const handleSignUp = (e) => {
    e.preventDefault()

  }
  const signingUp = (payload) => {
    console.log(payload);
    dispatch(signup(payload))
  }
    
   
  

  return (
    <>
     
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder='name'
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        /><br></br>
        <input
          type="date"
          placeholder='dob'
          value={dob}
          onChange={(e) => { setDob(e.target.value) }}
        /><br></br>
        Male:
        <input
          type="radio"
          id="m"
          name="gender"
          value={male}
          onChange={(e) => { setMale(e.target.value) }}
        /><br></br>
        Female:
        <input
          type="radio"
          id="f"
          name="gender"
          value={female}
          onChange={(e) => { setFemale(e.target.value) }}
        /><br></br>
        <input
          type="username"
          placeholder='username'
          value={username}
          onChange={(e) => { setUsername(e.target.value) }}
        /><br></br>
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        /><br></br>
        <Link to="/dashboard">
          <button type="submit" onClick={() => signingUp(fakeUserData())} >Sign Up </button><br></br></Link>
      </form>
      <DisplayUsers />

      
    </>
  )
}
export default SignUp






// const initialValue ={
  //   name:"",
  //   dob:"",
  //   male:"",
  //   female:"",
  //   username:"",
  //   password:"",
  // }