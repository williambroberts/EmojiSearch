"use client"
import React, {useState} from 'react'
import signUp from '@/firebase/auth/singupFunc'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const SignUpForm = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const router = useRouter()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const resArr = await signUp(email,password)
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

            <label  htmlFor='sign-up-email'/>
            <input type='email' name="sign-up-email" placeholder='Email'  required onChange={(e)=>setEmail(e.target.value)}/>
            <label  htmlFor='sign-up-password'/>
            <input type='password' name="sign-up-password" placeholder='Password'  required onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Sign up</button>
        </form>
        <span>
            Already have an account?
            <Link href={"/login"}>Login</Link>
        </span>
    </div>
  )
}

export default SignUpForm