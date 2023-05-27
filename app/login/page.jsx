import Banner from '@/components/auth/banner'
import LoginForm from '@/components/auth/login'
import FlexRow from '@/components/setup/flexRow'
import React from 'react'

const LoginPage = () => {
  return (
   <main className='auth-main'>
    
    <Banner name={" back"}/>
    <LoginForm/>  
   
   
   
   
   </main>
  )
}

export default LoginPage