import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../features/createSlice'
import DashBoard from '../components/DashBoard'
import { logout } from '../features/createSlice'
import './LoginPage.css'

const users = [
    {
      username: 'admin1',
      password: '12345678'
    },
    {
      username:'admin2',
      password:'012345678'
    }
  ];

const LoginPage = () => {
    const [loginUser,setLoginUser]=useState({
        name:'',
        password:''
    })
    const [message,setMessage]=useState("")
    //const {uname, pass} = loginUser;
    const checkUser = () => {

     
      // const usercheck = users.find(user => (user.name === uname && user.password === pass));
      // if(usercheck) {
        
      //   console.log("Login successful");
      // }else {
      //   console.log("Wrong password or username");
      // }
      // console.log(uname);
      // console.log(usercheck);

      
    }

    const changeHandler = (e) => {
      setLoginUser({...loginUser, [e.target.name]:[e.target.value]})
    }


    // if(users.username !== loginUser.name){
    //     console.log(users.username)
    //   }
    
const dispatch=useDispatch()
const navigate=useNavigate()
const err=useSelector((state)=>{
     return state.users.name
    }
     )

    const loginBtn = (e) =>{   
        e.preventDefault() 
        const regExp=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

        const login = (name, password) => (dispatch, getState) => {
            const users = getState().users;
            const user = users.find((user) => user.name === name && user.password === password);
          
            if (user) {
              dispatch(login(user));
            } else {
              dispatch(logout('Invalid email or password'));
            }
          };

        
        // checkUser();
        // console.log(checkUser());
        
    // dispatch(login({
    //     name:loginUser.name,
    //     password:loginUser.password,
    //     loggedIn:true
    // }))
    navigate("/dashboard")
    }


  // useEffect(() => {
  //   checkUser(users)
  //     }, [loginUser.name, loginUser.password])

 
    

        
    
    return (
        <>
        <div  className='box'>
        <h1>Welcome To Login Page</h1>
            <form className='container'>
                <input className='name'
                    type="name"
                    placeholder='name'
                    name="name"
                    value={loginUser.name}
                    onChange={changeHandler}
                />

                <input className='password'
                    type="password"
                    placeholder='password'
                    name="password"
                    value={loginUser.password}
                    onChange={changeHandler}  
                
                />
               
               <h1>{err}</h1>
               <>{message}</>
               <Link to="/forgetpassword"><p>Forget Password?</p></Link>
               <button className="btn" onClick={loginBtn}>Login</button>
               
               
               
                
                <Link to="/signup">Create new account</Link>
            </form>
            </div>
        </>
    )
}

export default LoginPage






// const regExp=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

        // if(password === ""){
        //     setMessage("Please Enter Password")
        // }else if(regExp.test(password)){
        //     setMessage("Password is valid")
        // }else if(!regExp.test(password)){
        //     setMessage("Password is not Valid")
        // }