import React from 'react'

export const metadata = {
    title: 'Login'
}


const LoginLayout = ({children}) => {
  return (
    <div className='layout-div'>{children}</div>
  )
}
export default LoginLayout