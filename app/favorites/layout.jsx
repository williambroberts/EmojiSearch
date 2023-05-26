import React from 'react'

export const metadata = {
    title: 'Favorites'
}


const FavoritesLayout = ({children}) => {
  return (
    <div className='layout-div'>{children}</div>
  )
}
export default FavoritesLayout