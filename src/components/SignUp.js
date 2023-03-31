import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signup } from '../features/createSlice'

function SignUp() {
  const [allValues, setAllValues] = useState({
    name: '',
    dob: '',
    male: '',
    female: '',
    username: '',
    password: '',
  });
  const dispatch = useDispatch()
  const [selected, setSelected] = useState('');

  const changeHandler = e => {
    e.preventDefault()
    console.log(e, "____________________-")
    setAllValues({ ...allValues, [e.target.name]: e.target.value })
    console.log(e.target.value);
    setSelected(e.target.value);

  }

  const signUpBtn = () => {
    dispatch(signup(allValues))

  }

  
  
 
  return (
    <>

      <form>
        <input className='name'
          type="text"
          placeholder='name'
          name="name"
          value={allValues.name}
          onChange={changeHandler}
        /><br></br>
        <input className='name'
          type="date"
          placeholder='dob'
          name="dob"
          value={allValues.dob}
          onChange={changeHandler}
        /><br></br>
        Male:
        <input className='name'
          type="radio"
          name="gender"
          value="Male"
          checked={selected === "Male"}
          onChange={changeHandler}
        /><br></br>
        Female: 
        <input className='name'
          type="radio"
          name="gender"
          value="Female"
          checked={selected === "Female"}
          onChange={changeHandler}
        /><br></br>
        <input className='name'
          type="username"
          placeholder='username'
          name="username"
          value={allValues.username}
          onChange={changeHandler}
        /><br></br>
        <input className='name'
          type="password"
          placeholder='password'
          name="password"
          value={allValues.password}
          onChange={changeHandler}
        /><br></br>
        <Link to="/dashboard">
          <button className='btn' onClick={signUpBtn}>Sign Up </button><br></br></Link>
      </form>
    </>
  )
}
export default SignUp
