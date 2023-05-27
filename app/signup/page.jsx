import Banner from '@/components/auth/banner'
import SignUpForm from '@/components/auth/signup'
import React from 'react'

const SignUpPage = () => {
  return (
   <main className="auth-main">
    <Banner/>
    <SignUpForm/>
   </main>
  )
}

export default SignUpPage