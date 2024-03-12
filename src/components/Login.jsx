import React, { useState } from 'react'
import  '../components/styles/login.css'
import { useNavigate } from 'react-router-dom'
import { account } from '../appwrite/auth';

function Login() {
    const navigate =useNavigate();

    const [user,setUser] = useState({
        email: "",
        password: "",
    })

    const loginUser = async(e)=>{
        e.preventDefault()
        try {
            await account.createEmailSession(user.email, user.password)
            navigate("/home")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="login-container">
    <form className="login-form" >
      <h2>Log in</h2>
      <label
        htmlFor='email'
        >
        Email
       </label>
      <div>
      <input 
         placeholder="Email"
         type="email" 
         id='email'
         onChange={(e) => {
            setUser({
                ...user,
                email: e.target.value
            })
         }}
         required
     />
      </div>

      <label
        htmlFor='password'
        >
        Password
       </label>
      <div>
      <input 
         placeholder="Password"
         type="password" 
         id='pass'
         onChange={(e) => {
            setUser({
                ...user,
                password: e.target.value
            })
         }}
         required
     />
      </div>
      
      <button 
       type="submit"
       onClick={loginUser}
       >
        Log in
      </button>
    </form>
   </div> 
  )
}

export default Login
