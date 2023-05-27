"use client"
import React, {useState} from 'react'
import signUp from '@/firebase/auth/singupFunc'
import { useRouter } from 'next/navigation'
import { addDoc, collection, setDoc, deleteDoc, doc, query, onSnapshot } from "firebase/firestore";
import { firestore } from '@/firebase/config';
import Link from 'next/link'
import Title from '../setup/title';
import { Inter } from 'next/font/google'
const inter  = Inter({subsets:["latin"]})

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
            console.log("change here will error on sign up")
            return
        }else {
            try {
                setDoc(doc(firestore, 'favorites', email), {
                    emojis: [],
                  });
               }catch (err){
                console.log(err,"err")
              }

            router.push("/favorites")
            return
        }
    }
  return (
    <div className='auth-form-container'>
        <Title text={"Sign up to EmojiSearch"}/>
        <form onSubmit={(e)=>handleSubmit(e)} className='auth-form'>

        <label  htmlFor='signup-email' className='auth-label'>Email</label>
            <input type='email' name="sign-up-email" placeholder='Email' className='auth-input'
             required onChange={(e)=>setEmail(e.target.value)}/>
           <label  htmlFor='signup-password' className='auth-label'>Password</label>
            <input type='password' name="sign-up-password" className='auth-input'
             placeholder='Password'  required onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit' className='auth-button'><span className={inter.className}>Sign up</span></button>
        </form>
        <span className='auth-span'>
            Already have an account?
            <Link href={"/login"} className={`${inter.className} auth-link`}>Login</Link>
        </span>
    </div>
  )
}

export default SignUpForm