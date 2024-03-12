import React, { useState } from 'react'
import  '../components/styles/signup.css'
import { useNavigate } from 'react-router-dom'
import { account } from '../appwrite/auth';
import {v4 as uuidv4} from 'uuid'

function SignUp() {
    const navigate =useNavigate();

    const [user,setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    //sign up

    const signupUser = async(e)=>{
        e.preventDefault()

        const promise = account.create(
            uuidv4(),
            user.email,
            user.password,
            user.name
        );
        promise.then(

             function(response) {
                console.log(response);
                navigate("")           //success
             },
             function(error){
                console.log(error)     //failure
             }     
        )
    }
        
  
        return (
    <div className="signup-container">
    <form className="signup-form" >
      <h2>Create an Account</h2>
       <label
        htmlFor='name'
        >
        Name
       </label>
      <div>
      <input 
         placeholder="Name"
         type="text" 
         id='name'
         onChange={(e) => {
            setUser({
                ...user,
                name: e.target.value
            })
         }}
         required
     />
      </div>

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
       onClick={signupUser}
       >
        Sign Up
      </button>
    </form>
  </div>
  )
}

export default SignUp
