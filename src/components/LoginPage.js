import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [message,setMessage]=useState("")

    const handleLogin = (e) =>{
        e.preventDefault()

        const regExp=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

        if(password === ""){
            setMessage("Please Enter Password")
        }else if(regExp.test(password)){
            setMessage("Password is valid")
        }else if(!regExp.test(password)){
            setMessage("Password is not Valid")
        }
    }
    return (
        <>
        <h1>Welcome To Login Page</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="name"
                    placeholder='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}  
                
                />
                <>{message}</>

                <button type="submit">Login</button>
                
                <Link to="/signup">Create new account</Link>
            </form>
        </>
    )
}

export default LoginPage