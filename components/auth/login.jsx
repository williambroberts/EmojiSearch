"use client"
import React,{useState,useContext} from 'react'
import LogIn from '@/firebase/auth/loginFunc'
import { useRouter } from 'next/navigation' 
import Link from 'next/link'
import Title from '../setup/title'
import { Inter } from 'next/font/google'
const inter  = Inter({subsets:["latin"]})
import IconGoogle from '../icons/social/google'
import { IsAUserLoggedInContext } from '@/contexts/authContext'
import { firestore } from '@/firebase/config'
import { addDoc, collection, setDoc, deleteDoc, doc, query, onSnapshot } from "firebase/firestore";
const LoginForm = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const {user,googleSignIn}=useContext(IsAUserLoggedInContext)
    const router = useRouter()

    const handleSubmit=async (e)=>{
        e.preventDefault()
       
        const resArr = await LogIn(email,password)
        const {result, error} = resArr
        if (error){
            console.log(error)
            console.log("change here will error on login")
            return
        }else {
            console.log(result)
            router.push("/favorites")
            return
        }
    }
    const handleGoogle = async ()=>{
      
        const {result,error} = await googleSignIn()
        //console.log(result)
        if (error){
         console.log(error)
         //console.log("change here will error on sign up")
         return
     }else {
        console.log(result)
        //  try {
        //      setDoc(doc(firestore, 'favorites', result.user.email), {
        //          emojis: [],
        //        });
        //     }catch (err){
        //      console.log(err,"err")
        //    }

         router.push("/favorites")
         
   }
 }
  return (
    <div className='auth-form-container'>
        <Title text={"Log in to EmojiSearch"}/>
        <form onSubmit={(e)=>handleSubmit(e)} className='auth-form'>

            <label  htmlFor='login-email' className='auth-label'>Email</label>
            <input type='email' name="login-email" placeholder='Email' className='auth-input'
            required onChange={(e)=>setEmail(e.target.value)}/>
            <label  htmlFor='login-password' className='auth-label'>Password</label>
            <input type='password' name="login-password" className='auth-input'
            placeholder='Password'  required onChange={(e)=>setPassword(e.target.value)}/>
           
            <button type='submit' className='auth-button'><span className={inter.className}>Login</span></button>
        </form>
        <span className='sign-in-google' onClick={()=>handleGoogle()}><IconGoogle/> Sign in with Google</span>
        <span className='auth-span'>
           Don&apos;t have an account?
            <Link href={"/signup"} className='auth-link'>Sign up</Link>
        </span>
    </div>
  )
}

export default LoginForm

// Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.