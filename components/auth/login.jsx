"use client"
import React,{useState} from 'react'
import LogIn from '@/firebase/auth/loginFunc'
import { useRouter } from 'next/navigation' 
import Link from 'next/link'
const LoginForm = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const router = useRouter()

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const resArr = await LogIn(email,password)
        const {result, error} = resArr
        if (error){
            console.log(error)
            return
        }else {
            console.log(result)
            router.push("/favorites")
            return
        }
    }
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>

            <label  htmlFor='login-email'/>
            <input type='email' name="login-email" placeholder='Email'  required onChange={(e)=>setEmail(e.target.value)}/>
            <label  htmlFor='login-password'/>
            <input type='password' name="login-password" placeholder='Password'  required onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
        <span>
           Don't have an account?
            <Link href={"/signup"}>Sign up</Link>
        </span>
    </div>
  )
}

export default LoginForm