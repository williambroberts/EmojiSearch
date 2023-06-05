"use client"
import React, {useContext, useState} from 'react'
import signUp from '@/firebase/auth/singupFunc'
import { useRouter } from 'next/navigation'
import { addDoc, collection, setDoc, deleteDoc, doc, query, onSnapshot ,runTransaction} from "firebase/firestore";
import { firestore } from '@/firebase/config';
import Link from 'next/link'
import Title from '../setup/title';
import { Inter } from 'next/font/google'
import { IsAUserLoggedInContext } from '@/contexts/authContext';
import IconGoogle from '../icons/social/google';
const inter  = Inter({subsets:["latin"]})

const SignUpForm = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [confirm,setConfirm]=useState()
    const router = useRouter()
    const {user,googleSignIn}=useContext(IsAUserLoggedInContext)
    const handleSubmit = async(e)=>{

        e.preventDefault()
        if (confirm!==password){
          alert("Password and confirmation password do not match")
          setConfirm("")
          setPassword("")
          return
      }
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
    const handleGoogle = async ()=>{
      
         const {result,error} = await googleSignIn()
         console.log(result)
         if (error){
          console.log(error)
          //console.log("change here will error on sign up")
          return
      }else {
        const userFavRef = doc(firestore, 'favorites', result?.user?.email);
        try {
          await runTransaction(firestore, async (transaction) => {
            const docSnapshot = await transaction.get(userFavRef);
           
          
        console.log("here will,",docSnapshot.exists(), docSnapshot.data())
        if (!docSnapshot.exists()){
          const data = {emojis:[]}
          try {
            await setDoc(doc(firestore, 'favorites', result.user.email), {
                emojis: [],
              });
           }catch (err){
            console.log(err,"err")
          } 
          console.log("user fav doc added")
        }else {
          console.log("user has a document already")
        }
      })
    } catch(err){
      console.log(err,"err adding new user doc")
    }

         

          router.push("/favorites")
          
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
            <input type='password' name="sign-up-password" className='auth-input' value={password}
             placeholder='Password'  required onChange={(e)=>setPassword(e.target.value)}/>
              <label  htmlFor='confirm-password' className='auth-label'>Confirm password</label>
            <input type='password' name="confirm-password" className='auth-input' value={confirm}
            placeholder='Confirm password'  required onChange={(e)=>setConfirm(e.target.value)}/>
            <button type='submit' className='auth-button'><span className={inter.className}>Sign up</span></button>
        </form>
        <span className='sign-in-google' onClick={()=>handleGoogle()}><IconGoogle/> Sign in with Google</span>
        <span className='auth-span'>
            Already have an account?
            <Link href={"/login"} className={`${inter.className} auth-link`}>Login</Link>
        </span>
    </div>
  )
}

export default SignUpForm